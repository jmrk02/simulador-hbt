import React, { useReducer } from "react";
import LeftArrow from "../../assets/img/left-arrow.png";
import RightArrow from "../../assets/img/right-arrow.png";
import UpArrow from "../../assets/img/arrow_up.png";
import DownArrow from "../../assets/img/arrow_down.png";

import "./styles.css";

import { useMediaQuery, useTheme } from "@mui/material";

// type State = {
//   rangeValue: number
// }

// type Action =
//   | { type: 'change'; payload: number }
//   | { type: 'move'; payload: number }

function reducer(state, action) {
  switch (action.type) {
    case "change":
      return {
        rangeValue: action.payload,
      };
    case "move":
      return {
        rangeValue: Math.round(action.payload),
      };
    default:
      return state;
  }
}

// type ChangeEvent = React.ChangeEvent<HTMLInputElement>
// type PointerEvent = React.PointerEvent<HTMLDivElement>
// type InlineStyle = React.CSSProperties

// interface Props {
//   beforeImage: string
//   afterImage: string
//   onChange?: (event: ChangeEvent) => void
//   onPointerMove?: (event: PointerEvent) => void
//   onPointerEnter?: (event: PointerEvent) => void
//   onPointerLeave?: (event: PointerEvent) => void
//   pointerMove?: boolean
//   className?: string
//   beforeClassName?: string
//   afterClassName?: string
//   buttonClassName?: string
//   style?: InlineStyle
//   beforeStyle?: InlineStyle
//   afterStyle?: InlineStyle
//   buttonStyle?: InlineStyle
// }

export function BeforeAfter({
  beforeImage,
  afterImage,
  onChange,
  onPointerMove,
  onPointerEnter,
  onPointerLeave,
  pointerMove = false,
  className = "before-after-slider",
  beforeClassName = "before",
  afterClassName = "after",
  buttonClassName = "resize-button",
  style,
  beforeStyle,
  afterStyle,
  buttonStyle,
}) {
  const theme = useTheme();
  const screenMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [{ rangeValue }, dispatch] = useReducer(reducer, {
    rangeValue: 50,
  });

  const handleChange = (event) => {
    dispatch({ type: "change", payload: Number(event.target.value) });

    if (onChange) onChange(event);
  };

  const handlePointerMove = (event) => {
    const { clientX, currentTarget } = event;
    const { left, width } = currentTarget.getBoundingClientRect();
    const positionX = clientX - left;

    if (positionX >= 0)
      dispatch({ type: "move", payload: (positionX / width) * 100 });

    if (onPointerMove) onPointerMove(event);
  };

  const handlePointerMoveMobile = (event) => {
    const { clientY, currentTarget } = event;
    const { top, bottom, height } = currentTarget.getBoundingClientRect();
    // console.log("clientY", clientY);
    // console.log("bottom", bottom);
    // console.log("top", top);
    const positionY = clientY + top;

    if (positionY <= 0) {
      dispatch({ type: "move", payload: (positionY / height) * 100 });
    }

    if (onPointerMove) onPointerMove(event);
  };

  const handlePointerEnter = (event) => {
    if (!onPointerEnter) return;

    onPointerEnter(event);
  };

  const handlePointerLeave = (event) => {
    if (!onPointerLeave) return;

    onPointerLeave(event);
  };

  return (
    <div
      className={className}
      style={{
        position: `relative`,
        overflow: `hidden`,
        width: "100%",
        cursor: "e-resize",
        userSelect: "none",
        ...style,
      }}
      onPointerMove={screenMobile ? handlePointerMoveMobile : handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <div
        className={beforeClassName}
        style={{
          position: "absolute",
          overflow: "hidden",
          width: `${screenMobile ? "100%" : rangeValue + "%"} `,
          height: `${screenMobile ? rangeValue + "%" : "100%"}`,
          top: 0,
          left: 0,
          borderRight: "4px solid #eee",
          borderBottom: screenMobile ? "4px solid #eee" : "none",
          zIndex: "5",
          ...beforeStyle,
        }}
      >
        <div className="d-flex align-items-center wrap-before">
          <div className="description">
            <h3 className="mb-3">
              <span>HABI</span> VIAJÒ AL
              <br /> PASADO
            </h3>
            <p>
              Para demostrarte que invertir en <strong>AFP Habitat</strong> es
              la mejor elección. Descubre los beneficios de invertir tu dinero y
              generar <span>rentabilidad.</span>
            </p>
          </div>
        </div>

        <img
          src={beforeImage}
          alt="before"
          style={{
            height: screenMobile ? "auto" : "100%",
            width: screenMobile ? "100%" : "auto",
          }}
        />
      </div>

      <div className={afterClassName} style={afterStyle}>
        <img
          src={afterImage}
          alt="after"
          style={{ width: "100%", display: "block" }}
        />

        <div className="d-flex align-items-center wrap-after">
          <div className="description">
            <h3 className="mb-3">
              <strong>Planifica tu futuro</strong> <br /> con responsabilidad
            </h3>
            <p>
              Realiza una simulación de la rentabilidad que podrías generar si
              empiezas a invertir tu fondo de jubilación en{" "}
              <strong>AFP Habitat.</strong>
            </p>
          </div>
        </div>
      </div>

      {!pointerMove && (
        <>
          <input
            type="range"
            min={0}
            max={100}
            value={rangeValue}
            name="slider"
            onChange={handleChange}
            className={screenMobile ? "slider-mobile" : "slider-desktop"}
            style={{
              appearance: "none",
              backgroundColor: "transparent",
              width: "100%",
              height: " 100%",
              position: "absolute",
              //   top: '50%',
              //   left: '50%',
              transform: "translate(-50%, -50%)",
              cursor: "inherit",
            }}
          />
          <div
            className={buttonClassName}
            style={{
              pointerEvents: "none",
              position: "absolute",
              left: `${screenMobile ? "" : rangeValue}%`,
              right: `${screenMobile ? "7" : ""}%`,
              top: `${screenMobile ? rangeValue - 2 : "50"}%`,
              // transform: `translate(-50%,-50%)`,
              borderRadius: "50%",
              width: 30,
              height: screenMobile ? 37 : 30,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: "99",
              transform: `${screenMobile ? "" : "translate(-50%,-50%)"}`,
              ...buttonStyle,
            }}
          >
            {screenMobile ? (
              <div className="containerArrowMobile">
                <div className="boxArrowMobile">
                  <img src={UpArrow} width={16} height={16} />
                  <p className="boxArrowTxt">Subir</p>
                </div>
                <div className="boxArrowMobile">
                  <img src={DownArrow} width={16} height={16} />
                  <p className="boxArrowTxt">Bajar</p>
                </div>
              </div>
            ) : (
              <div style={{ display: "flex" }}>
                <img src={LeftArrow} width={35} height={35} />
                <img src={RightArrow} width={35} height={35} />
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
