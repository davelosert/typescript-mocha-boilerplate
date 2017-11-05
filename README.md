# Typescript Mocha Boilerplate
This is just a very basic and simple boilerplate to set up a typescript TDD environment with mocha. 

The purpose is to have a quick running environment, for example to do some prototyping, learn TDD, Clean Coeds, Patterns or whatsoever with Typescript or actually start a real TypeScript Project.

To use it for your own projects, simply do this:
```
git clone --depth=1 https://github.com/davelosert/typescript-mocha-boilerplate
// Rename the folder to your projects name
mv typescript-mocha-boilerplate <name-of-your-project>
cd $_
// Remove the link to this origin repository
git remote remove origin
// Add your own origin again
git remote add origin https://github.com/path/to/your/target/repository
npm install
```


## Tools
The Tools included are:

- [ts-node](https://github.com/TypeStrong/ts-node)
- [typescript](https://github.com/Microsoft/TypeScript)
- [mocha](https://mochajs.org/)
- [chai](http://chaijs.com/)
- [sinon](http://sinonjs.org/)
- [sinon-chai](https://github.com/domenic/sinon-chai)

## How to run
Simply type `npm run test` and all tests will be run.

## Configuration
All Mocha Configuration is handled via the [mocha.opts](./mocha.opts) File, this includes:
- **Compiler-Options:** Tests are ran with *ts-node* directly to skip a compilation phase
- **Test-Filter-Patterns:** All files ending with `spec.ts` will be included in tests
- **Globals and Plugin registration**: plugins (e.g. sinon-chai) can be registered within the [mocha-globals.js](./test/mocha-globals.js) File
