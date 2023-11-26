import './App.scss';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { MainSiteView } from './view/main_site_view';
import { ErrorView } from './view/error_view';
import { ContactView } from './view/contacts_view';
import { AboutView } from './view/about_view';
import { CertificatesView } from './view/certificates_view';
import { ProjectsView } from './view/projects_view';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/'>
      <Route index element={<MainSiteView />} />
        <Route path='/home' element={<MainSiteView />} />
        <Route path='/start' element={<MainSiteView />} />
      </Route>
      <Route path='/about' element={<AboutView />}/>
      <Route path='/certificates' element={<CertificatesView/>} />
      <Route path='/projects' element={<ProjectsView />} />
      <Route path='/contacts' element={<ContactView />} />
      <Route path='*' element={<ErrorView />} />
    </>
  )
);

function App() {
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App;
