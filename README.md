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
---
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
    url: "" // paste local url of the react-router dev, ex: http://localhost:5173/
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
### Optional step, configure app icon and splash
on root folder, add new folder named assets:
```
assets/
├── icon-only.png
├── icon-foreground.png
├── icon-background.png
├── splash.png
└── splash-dark.png
```
notes:
1. Icon files should be at least 1024px x 1024px.
2. Splash screen files should be at least 2732px x 2732px.
3. The format can be jpg or png.
```shell
bunx capacitor-assets generate
```

### More configuration for splash screen, also optional
```shell
bun i @capacitor/splash-screen
```
```shell
bunx cap sync
```
open up capacitor.config.ts, after server, add this
```typescript
plugins: {
      SplashScreen: {
        launchShowDuration: 3000,
        launchAutoHide: true,
        launchFadeOutDuration: 1000,
        backgroundColor: "#ffffffff",
        androidSplashResourceName: "splash",
        androidScaleType: "CENTER_CROP",
        showSpinner: true,
        androidSpinnerStyle: "small",
        iosSpinnerStyle: "small",
        spinnerColor: "#999999",
        splashFullScreen: true,
        splashImmersive: true,
      },
    },
```

---
### Start cloudflare tunnel
Download cloudflared from the link: https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/downloads/
after finish downloading
```shell
cloudflared tunnel --url [your url goes here]
```
