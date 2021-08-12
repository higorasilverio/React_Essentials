import React from 'react'
import {Route, useLocation, Routes} from 'react-router-dom'

import "./App.css"

import {
  About,
  Contact,
  Events,
  Home,
  Services,
  CompanyHistory
} from "./Pages";

export const LocationDisplay = () => {
  const location = useLocation()

  return <div data-testid="location-display">{location.pathname}</div>
}

const App = () => (
  <div className="App">
    <h1>Routes</h1>
    <Routes>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
        <Route path="/company-history" element={<CompanyHistory />} />
        <Route path="/services" element={<Services />} />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>

      <Route path="/events">
        <Events />
      </Route>
    </Routes>

    <LocationDisplay />
  </div>
)

export default App
