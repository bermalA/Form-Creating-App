Form Creating App

This app is created to make preparing reports easy. The app is made with simple styling and easy-to-handle functionality so that the user experience can be maximazed. App is written using only React.js, MUI component library, Formik library and React-DnD library.

The source folder is divided to three: Components, Data and Pages. Components folder contains the components that can be used repeatedly.
Data folder saves the data. Pages folder is where the pages composed by the components can be found.
Inside the folders, there's folders each named after the item it contains. The folders is made so that each item and its styling page can be seperated.

Login page includes multiple language options made with useState hooks. Also password can be made visible or invisible. Login information is taken with formik functions then saved inside ./data/user.jsx.

Then the login info is set inside the widget component. Widgets can be seen inside Homepage so the information can be visible.

The form page is where the forms are to be prepared.
There are three bars inside the form page.
The left contains the components buttons, when clicked the components are rendered inside the middle bar.

Middle bar is where the actual form is to be seen. Components are rendered in the middle bar.

Right bar has two parts. The top part selects the spesifications, sends or resets the form.
There's no actual component in the bottom part unless a component from the middle bar is choosen.
When the component is choosen then a input field is rendered inside the right bar. When an input is rendered, the input becomes an label for the choosen component.

In the components folder, there's LeftBar component which is the left menu in each page and a NavBar component that is the navigation bar. There's also another folder named as Draggables.

Draggables folder is the folder which composes the component that can be found inside the form page. Each components made dragable with the useDrag hook from the React-DnD. Components then mapped inside the form page so when icon buttons are clicked they are rendered, then they can be repositioned inside by dragging.

There're also Board component which also rendered inside the form page. But they are made using useDrop hook from the React-DnD library. So they are used as dropzones for the dragable components.
