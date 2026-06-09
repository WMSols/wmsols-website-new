import React from 'react'
import ServicesPage from './servicesPage'


import { Metadata } from 'next';

export const metadata:Metadata ={
  title: "Insights & Blog | WMsols — Tech, Design & Digital Strategy",

description:
  "Read the WMsols blog for expert insights on web development, mobile apps, AI automation, UI/UX design, and digital transformation. Practical knowledge for builders.",

keywords: [
  "software development blog",
  "tech insights",
  "AI automation articles",
  "digital strategy blog",
  "web development tips",
],
}
const page = () => {
  return (
    <ServicesPage />
  )
}

export default page