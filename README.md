# Wolbachia Decision-Support Tool

This repository contains the code and data necessary for building the Wolbachia Decision-Support Tool. You can see a version of this tool live at https://wolbachia-tool.netlify.app. This tool is designed to support decisions related to Wolbachia implementation and scale-up for global dengue control for countries around the world.

This README contains some notes that should be useful for future maintainers of the app or to anyone who would like to contribute to the project.

## Data Preprocessing

The major value of this app is to bring together curated data and well-researched methods into a simple interface to aid decision-makers. The methods implemented in this app depend on a great deal of data. It is important to understand where these data come from and how they are transformed into a format that this app can use so that future maintainers can update data when needed.

### Data Sources

Data is pulled from many sources. You can read [here](https://wolbachia-tool.netlify.app/#datasources) for a detailed explanation. All of the data comes together into two major sources:

- Country metadata
- Geographic shapefiles that include sub-national metadata

Code and data files that are used to transform these sources into an app-compatible format can be found [here](tree/main/_preprocessing).

### Country Metadata

Country metadata is gathered from many sources and ultimately ends up in an Excel file located [here TODO](). An R script, located [here](blob/main/_preprocessing/preprocess.R) is used to read this Excel file and transform it into a JSON file for the app to use. (TODO: should we have a schema for this file?)

### Geographic Shapefiles

Shapefiles are prepared in ArcGIS. Preparing this data is a complex and tedious process and will be documented separately. Given a set of shapefiles for each scenario in the app (different population densities or disease reduction criteria), the [same R script](blob/main/_preprocessing/preprocess.R) referenced previously is used to transform these files into topojson files that can be used by the app.

## Development Notes

This project is a client-side JavaScript app written react and bootstrapped with [Create React App](https://github.com/facebook/create-react-app). The following major packages are used in this app:

- [MUI](https://mui.com): for UI components
- [React Query](https://tanstack.com/query/v3/): for fetching data
- [d3](https://d3js.org): for color scales
- [react-leaflet](https://react-leaflet.js.org) / [topojson-client](https://github.com/topojson/topojson-client): for maps
- [react-countup](https://github.com/glennreyes/react-countup): for animating changing numbers
- [React Router](https://reactrouter.com/en/main): for routing
- [react-use-scrollspy](https://github.com/Purii/react-use-scrollspy): for navigating main page
- [react-number-format](https://s-yadav.github.io/react-number-format/docs/intro/): for formatting numeric inputs

Most of the app is static content. The interactive part of the app (found at the "/tool" route) is a relatively straightforward set of inputs and outputs handled with simple React [state hooks](https://react.dev/reference/react#state-hooks).

An important file to look at to start getting oriented with the app is `src/constants.js`. This file specifies data objects that define a great deal of the content in the app, along with default values for all of the inputs, specifications of how the output will be presented, etc. It is likely that if you just need to make some edits to some text that appears somewhere in the app, this is the place to do that. The following data objects are created in this file and used throughout the app.

- `USER_GUIDE_CONTENT`: Each entry in this array is an object that describes a section in the "User Guide" part of the app. Each entry is an object that has a `title`, `description`, and `illustration`. The `illustration` is a path to the video tutorial associated with that section.
- `DATA_SOURCES_CONTENT`: This array specifies the content that goes in the "Data Sources" part of the app. Each entry is an object with fields `title`, `text`, and optional field `extraText`. Each entry in this section is meant to be concise, but if there is more content that you want to add to a section, you can use `extraText` to specify this. If specified, the section have a button added to it, "Learn More", which when clicked will display the extra content in a modal.
- `CALCS`: This specifies the content of the "Calculations" part of the app. It an array of subsections. Each subsection has a `section` title and an array of `items`. Each item in a subsection has a `title` and a `description`. Additional components and constants are available here to help with how content is displayed in this section.

The remaining contants found in `constants.js` pertain to the "Tool" part of the app.

- `INPUTS`: The keys of this object pertain to all of the inputs that appear in the sidebar of the tool. Each input has a `label` and a `default` value. For inputs that are categorical, a set of possible `values` to choose from is specified and `valueLabels` that define each value. If the input is numeric, a `range` of valid values is specified. Some inputs have additional attributes that should be self-explanatory when seeing how they are used in the code.
- `TOOLTIPS`: Specifies the content of tooltips that appear throughout the tool, mainly in the inputs.
- `VARS`: An array that specifies each output variable, including information about how it will be displayed in the output tables, etc.
- `TOOLSECTEXT`: Specifies the content that goes at the beginning of each section in the main output panel of the tool.
- `SUMMS`: Specifies attributes of the large summary statistics outputs that appear at the beginning of each output section.
- `TABLES`: Specifies the variables that appear in each table found in the output.
- `TABLESORT`: Specifies the default sort variable and order for each output table.

Since the app is not very complex, nearly all of the state logic for the app is created at the top level of the app (`src/App.js`) and simply passed down to the components that need to display or change the state. The user input state is held in one large object, which is populated in `src/App.js` with default values coming from the constants described above. Aside from the large `inputs` state object, the only other major state variables are the selected country (`countryCode`), the variable used for coloring the map (`colorVar`), and whether or not the sidebar is open (`openSidebar`). Note that the app is responsive and the the only place where the open sidebar state is used is when the app window is very narrow (e.g. being viewed on a smartphone), in which case the user can toggle the sidebar open and closed.

The source code for the "Tool" part of the app is found in `src/components/tool`. The main file here is `Tool.js` which specifies all of the user inputs, provides the logic that calculates results based on the inputs, and specifies the output content through the use of other components found in this directory.

When the app first loads, all of the country metadata is loaded using `useCountryMeta()` in `src/App.js`. You can see this file [here](blob/main/public/data/countryMeta.json) to get a feel for its contents. It contains the data from "country_meta.xlsx" described earlier in the preprocessing section.

When the Tool component is rendered, it pulls the appropriate topojson data for the selected country, targeting criteria ("DISRED" for disease reduction or "POPDEN" for population density) and then the associated disease reduction target in the case of DISRED ("12_5" for 12.5% and "15" for 15%) or population density in the case of POPDEN (250, 500, 1000, or 1500). These files are located in the associated subdirectories [here](tree/main/public/data). Any given topojson file contains the geometry of the subregions of the country to draw on the map along with metadata for each of those regions.

The combination of the country metadata, the metadata foundin the topojson files, and the user inputs is used to calculate the outputs. The logic for these calculations is found in the `calculateData()` function in `Tool.js`. The logic in the function follows the information provided in the "Calculations" section of the main page of the app.

This should serve as a sufficient orientation to get acquainted with the app for those with familiarity with React. Below are some additional guidelines for working on the app in development mode and

### Development mode

To run the app in development mode, you should first clone the GitHub repository and `npm install` from within the project directory (it is already assumed you have node and npm installed). Then you can run:

```
npm start
```

This will start a local server, usually on port 3000, which you can view in your browser: [http://localhost:3000](http://localhost:3000). The page will reload when you make changes. You may also see any lint errors in the console.

### Deployment

There are many options for deploying the app. One option is to run:

```
npm run build
```

This builds the app for production and optimizes it for best performance and places the build in the `build` folder.

You can now simply place the contents of the build folder on your web server and your app is deployed.

For additional deployment options outside of deploying to your own server, see [here](https://facebook.github.io/create-react-app/docs/deployment).
