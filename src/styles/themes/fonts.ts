interface Font {
  font: string;
  weight: number;
  size: number;
  lineHeight: number;
}

export const FONT = ({ font, weight, size, lineHeight }: Font): string => {
  return `
        font-family: "${font}";
        font-weight: ${weight};
        font-size: ${size}rem;
        line-height: ${lineHeight}%;
      `;
};

export const fonts = {
  logo: FONT({ font: "omyu", weight: 400, size: 20, lineHeight: 26 }),
  headline1: FONT({ font: "omyu", weight: 400, size: 20, lineHeight: 26 }),
  headline2: FONT({ font: "omyu", weight: 400, size: 15, lineHeight: 20 }),
  body1: FONT({ font: "omyu", weight: 400, size: 15, lineHeight: 20 }),
  body2: FONT({ font: "omyu", weight: 400, size: 12, lineHeight: 16 }),
  luckyBall1: FONT({ font: "omyu", weight: 400, size: 30, lineHeight: 35 }),
  luckyBall2: FONT({ font: "omyu", weight: 400, size: 25, lineHeight: 30 }),

  omyu: `
        @font-face {
          font-family: "omyu";
          src: url("./omyu.ttf") format("truetype");
          font-weight: 400;
        }
      `,

  logoStyle: `
      .headline {
        font-family: "omyu";
        font-size: 20px;
        line-height: 26px;
      }
    `,

  headline1Style: `
        .headline {
          font-family: "omyu";
          font-size: 20px;
          line-height: 26px;
        }
      `,

  headline2Style: `
      .headline {
        font-family: "omyu";
        font-size: 15px;
        line-height: 20px;
      }
    `,

  body1Style: `
        .body1 {
          font-family: "omyu";
          font-size: 15px;
          line-height: 20px;
        }
      `,

  body2Style: `
        .body2 {
          font-family: "omyu";
          font-size: 12px;
          line-height: 16px;
        }
      `,

  luckyBall1Style: `
        .luckyBall1 {
          font-family: "omyu";
          font-size: 30px;
          line-height: 35px;
        }
      `,

  luckyBall2Style: `
        .luckyBall2 {
          font-family: "omyu";
          font-size: 25px;
          line-height: 30px;
        }
      `,

  body: `
        body {
          font-family: "omyu", sans-serif;
        }
      `,
};
