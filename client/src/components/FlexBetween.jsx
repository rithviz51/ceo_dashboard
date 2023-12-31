const { Box } = require("@mui/material")
const { styled } = require("@mui/system")

//This component is used for adding space between two divs in a div itself.

const FlexBetween = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
})

export default FlexBetween;