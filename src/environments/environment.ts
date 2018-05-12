// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyBHDHCLFuTIqduL5AFLgP7J4gh2GYwe7XI",
    authDomain: "reading-minds.firebaseapp.com",
    databaseURL: "https://reading-minds.firebaseio.com",
    projectId: "reading-minds",
    storageBucket: "reading-minds.appspot.com",
    messagingSenderId: "122839330504"
  }
};
