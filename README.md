## How to ???
```shell
git clone https://github.com/yayayapluto/Web-Lelang-Online
```

```shell
bun i
```

```shel
bun run dev
```

## Run capacitor
```shell
bun i @capacitor/core
```
```shell
bun i @capacitor/cli
```
```shel
bunx cap init
```
after running init, capacitor would be create file named capacitor.config.ts
open capacitor.config.ts then after webDir, add this
```typescript
server: {
    cleartext: true,
    hostname: "" // paste local url of the react-router dev, ex: http://localhost:5173/
}
```
```shell
bun i @capacitor/android
```
```shell
bunx cap add android
```
```shel
bun run build
```
after build, open up vite.config.ts then after plugins, add this
```typescript
server: {
    allowedHosts: true,
    host: true,
    port: 5174
  }
```
also open up capacitor.config.ts, change webDir to 'build'
```typescript
webDir: 'build'
```
```shell
bunx cap sync
```
```shell
bunx cap run android
```
