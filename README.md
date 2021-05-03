# Using Create React App with 11ty image

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) with enhanced images from the [11ty image plugin](https://www.11ty.dev/docs/plugins/image/)!

To learn more about how this setup works and why we'd use the approach to optimize our images, [read the full blog post](https://bholmes.dev/blog/picture-perfect-image-optimization/).
## Spinning this baby up

In the project directory, you can run:

### `npm start`

This does 2 major tasks:
- starts the app in development mode 👉 Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- spins up a node script to watch for new image files in the `/public` directory. Whenever if finds one, it will use the 11ty image plugin to generate multiple resolutions and file formats (`jpg` and `webp`) of that same image.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).