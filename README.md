# mediagent-admin

Adminitrative webpage for medication helper system \"MediAgent\"

Based on [vue-admin-template](https://github.com/PanJiaChen/vue-admin-template) 

Extended template: [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)


```bash
# clone the project
git clone https://github.com/lokks307/mediagent-admin.git

# enter the project directory
cd mediagent-admin

# install dependency
npm install

# develop
npm run dev
```

This will automatically open http://localhost:9528

## Preparations

### Step 1 – Add Node.js PPA
1. Add Node.js PPA
```bash
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
```

### Step 2 – Install nodejs (npm included)
2. Install via `apt`
```bash
sudo apt install nodejs
```

3. Check the version of installed packages.
```bash
nodejs --version
npm --version
```
4. They should be v12.13.0 and 6.12.0

## Build

```bash
# build for test environment
npm run build:stage

# build for production environment
npm run build:prod
```

## Advanced

```bash
# preview the release environment effect
npm run preview

# preview the release environment effect + static resource analysis
npm run preview -- --report

# code format check
npm run lint

# code format check and auto fix
npm run lint -- --fix
```

