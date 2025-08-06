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
    hostname: ""
}
```
```shell
bun i @capacitor/android
```
```shell
bunx cap add android
```
```shell
bunx cap sync
```
```shell
bunx cap run android
```
