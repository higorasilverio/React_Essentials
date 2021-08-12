import React from "react"
import { Link, Outlet } from "react-router-dom"

import "./Pages.css"

export function Home() {
    return (
        <div>
            <h1>[Company Website]</h1>
            <nav>
                <Link className="link" to="about">About</Link>
                <Link className="link" to="events">Events</Link>
                <Link className="link" to="contact">Contact</Link>
            </nav>
        </div>
    )
}

export function About() {
    return (
        <div>
            <h1>[About]</h1>
            <Outlet />
        </div>
    )
}

export function Events() {
    return (
        <div>
            <h1>[Events]</h1>
        </div>
    )
}

export function Contact() {
    return (
        <div>
            <h1>[Contact]</h1>
        </div>
    )
}

export function Services() {
    return (
        <div>
            <h2>Our Services</h2>
        </div>
    )
}

export function CompanyHistory() {
    return (
        <div>
            <h2>Our Company History</h2>
        </div>
    )
}
