import { configure } from "@storybook/react"
import "tailwind.css"

// automatically import all files ending in *.stories.js
configure(require.context("../src/components", true, /stories\.tsx$/), module)
