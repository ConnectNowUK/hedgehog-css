// Test import of a JavaScript module
import { example } from '@/js/example'

// Test import of an asset
import webpackLogo from '@/images/webpack-logo.svg'

// Test import of styles
import '@/styles/index.scss'

// Appending to the DOM
const logo = document.createElement('img')
logo.src = webpackLogo

const heading = document.createElement('h1')
heading.textContent = example()

const btn = document.createElement('button')
btn.textContent = 'hello'

const label = document.createElement('label')
label.textContent = 'hello'

const input = document.createElement('input')
input.textContent = 'hello'

// const app = document.querySelector('#root')
// app.append(logo, heading, label, input, btn)
