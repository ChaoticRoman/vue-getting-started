# Getting started with Vue.js

So I have asked GPT-4 Turbo how to start with Vue.js development on development and it basically
told me to get Node.js and npm. I have already that, using `nvm` (Node Version Management) so
I only checked what is the latest LTS version of Node.js (20.10.0 at the time of writing this)
and install and set that:

```
nvm install 20.10.0
nvm use 20.10.0
```

Following instruction (you can see that I have used `vue-getting-started` instead of `hello-world`)
are just copy pasted:

1. **Install Vue CLI**:
   **Note:** Vite is current recommended project scaffolding tool and Vue CLI is in maintenance mode.

   Vue CLI is a command-line tool for scaffolding Vue.js projects. Install it globally using npm:

   ```bash
   npm install -g @vue/cli
   ```

2. **Create a new Vue.js project**:
   Use Vue CLI to create a new project. Replace `hello-world` with your desired project name:

   ```bash
   vue create hello-world
   ```

   Follow the prompts to select the features you want for your project. For a simple "Hello, World!" app, you can choose the default preset.

3. **Navigate to your project folder**:
   Once the project is created, navigate to the project directory:

   ```bash
   cd hello-world
   ```

4. **Structure of the repository**:
   Your Vue.js project will have the following structure:

   ```
   hello-world/
   ├── node_modules/          # Folder where all the dependencies are installed
   ├── public/                # Static assets that are not processed by webpack
   │   ├── favicon.ico        # Project favicon
   │   └── index.html         # Main HTML file
   ├── src/                   # Source files for your Vue app
   │   ├── assets/            # Module assets like images and styles
   │   ├── components/        # Vue components
   │   ├── App.vue            # Main Vue component
   │   └── main.js            # Entry point for your app
   ├── .gitignore             # Git ignore file
   ├── babel.config.js        # Babel configuration
   ├── package.json           # Project metadata and dependencies
   ├── package-lock.json      # Locked versions of dependencies
   └── README.md              # Project README file
   ```

5. **Edit your "Hello, World!" component**:
   Open the `src/App.vue` file and replace its content with the following to create a simple "Hello, World!" message:

   ```vue
   <template>
     <div id="app">
       <h1>Hello, World!</h1>
     </div>
   </template>

   <script>
   export default {
     name: 'App'
   }
   </script>

   <style>
   #app {
     font-family: 'Avenir', Helvetica, Arial, sans-serif;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
     text-align: center;
     color: #2c3e50;
     margin-top: 60px;
   }
   </style>
   ```

6. **Manage dependencies**:
   Your project's dependencies are listed in the `package.json` file. To install these dependencies, you run:

   ```bash
   npm install
   ```

   This command reads the `package.json` file and installs all the necessary packages into the `node_modules` directory.

7. **Run the application**:
   Start the development server with:

   ```bash
   npm run serve
   ```

   This command will compile your app and make it available at `http://localhost:8080/` by default. Open this URL in your web browser to see your "Hello, World!" Vue.js app.

8. **Version control with Git**:
   Initialize a new Git repository if you want to use version control:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

   Make sure to customize the `.gitignore` file to exclude files and directories that should not be committed to the repository (like `node_modules/`).

That's it! You've now set up a basic Vue.js "Hello, World!" application on your Ubuntu machine. You can start developing your app by editing the components and adding new features as needed.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
