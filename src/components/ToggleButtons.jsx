import React from "react";
import { styled } from "@material-ui/core/styles";
import ToggleButton from "@material-ui/core/ToggleButton";
import ToggleButtonGroup from "@material-ui/core/ToggleButtonGroup";
import { Box } from "@material-ui/core";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  "&.Mui-selected": {
    borderColor: "#2e7d32",
    borderRadius: 9,
  },
  "& .MuiToggleButtonGroup-grouped": {
    margin: theme.spacing(0.5),
    borderRadius: theme.shape.borderRadius,
    borderColor: "#bdbdbd",
    "&.Mui-disabled": {},
    "&:not(:first-of-type)": {
      borderRadius: theme.shape.borderRadius,
      borderColor: "#bdbdbd",
    },
    "&:first-of-type": {
      borderRadius: theme.shape.borderRadius,
      borderColor: "#bdbdbd",
    },
  },
}));

const ToggleButtons = ({ updateMaterial, skillsData, skill, currentLevel }) => {
  const [selectedMaterial, setSelectedMaterial] = React.useState();

  const handleChange = (event, newMaterial) => {
    if (event.currentTarget.value !== "loading") {
      // setSelectedMaterial(event.currentTarget.value);
      setSelectedMaterial(newMaterial);
      // console.log(newMaterial, selectedMaterial);
      if (newMaterial === null) {
        updateMaterial(["material", { name: "material", submaterials: {} }]);
      } else {
        // console.log(currentLevel);
        // console.log(skillsData['Crafting']['Wealth']['level']);
        // console.log("Skills data: ", currentLevel >= parseInt(skillsData[skill]['Gold']['level']));
        updateMaterial([
          event.currentTarget.value,
          skillsData[skill][event.currentTarget.value],
        ]);
      }
    }
  };
  return (
    <>
      <Box
        sx={{
          "& > :not(style)": {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            maxWidth: 450,
            // marginBottom: 1,
            marginLeft: "auto",
            marginRight: "auto",
          },
        }}
      >
        <StyledToggleButtonGroup
          size="small"
          value={selectedMaterial}
          exclusive
          onChange={handleChange}
          sx={{
            // border: 1,
            // borderColor: "#c4c4c4",
            padding: 1,
            // borderTop: 2,
            // borderTop: 2,
          }}
        >
          {skillsData[skill] !== undefined ? (
            Object.keys(skillsData[skill]).map((material) =>
              currentLevel >= parseInt(skillsData[skill][material]['level']) ? (
                <ToggleButton
                  value={material}
                  sx={{
                    // outlineColor: "red",
                    // outlineWidth: "1px",
                    // outlineStyle: "solid",
                    // borderWidth: 4,
                    // borderRadius: "2px",
                    // margin: "20px",
                    "& > :not(style)": {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                    // border: 1,
                    // borderColor: "#b4b4b4",
                  }}
                >
                  <Box
                    sx={{
                      marginRight: 0.4,
                    }}
                  >
                    <img
                      src={`/images/${skill}/${material}.png`}
                      width="22"
                      height="22"
                      value={material}
                      onClick={handleChange}
                      alt="Icon"
                    />
                  </Box>
                  {material}
                </ToggleButton>
              ) : (
                <ToggleButton
                  value={material}
                  disabled
                  sx={{
                    // outlineColor: "red",
                    // outlineWidth: "1px",
                    // outlineStyle: "solid",
                    // borderWidth: 4,
                    // borderRadius: "2px",
                    // margin: "20px",
                    "& > :not(style)": {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                    // border: 1,
                    // borderColor: "#b4b4b4",
                  }}
                >
                  <Box
                    sx={{
                      marginRight: 0.4,
                    }}
                  >
                    <img
                      src={`/images/${skill}/Gray ${material}.png`}
                      width="22"
                      height="22"
                      value={material}
                      onClick={handleChange}
                      alt="Icon"
                    />
                  </Box>
                  {material}
                </ToggleButton>
              )
            )
          ) : (
            <ToggleButton value="loading">Loading</ToggleButton>
          )}
          {/* <ToggleButton value="justify" aria-label="justified" disabled>
            qqqqqq
          </ToggleButton> */}
        </StyledToggleButtonGroup>
      </Box>
    </>
  );
};

export default ToggleButtons;
