"use strict"

const h = 500;
const w = 1100;

let events = [];
let logo;

function setup() {
   createCanvas(w, h);
   angleMode(DEGREES);

   logo = loadImage("logo.png")

   events = [
      "Summer School Application",
      "SAT 1",
      "SAT 2",
      "SAT 1 (US Only)",
      "SAT 2 (US Only)",
      "ED/EA Deadline",
      "RD Deadline",
      "AP", //7
      "Summer Essay Class",
   ]
}

function draw() {
   const months = 12;
   const currentMonth = month()

   const darkGrey = color(110)
   const grey = color(160)
   const lightGrey = color(200)
   const vLightGrey = color(245)
   const highlight = color(59, 173, 226)

   background(vLightGrey);

   for (let i = 0; i <= months; i++) {


      const locW = (w / 12) + (i * 70);
      const locT = locW - (w / 166)
      const locL = locT - (w / 166)
      const locH = h / 2;
      const locLH = locH + (w / 45)
      const lineS = h / 100
      const lineL = 10 + lineS
      const locTxt = locT - 10
      const locHTxt = locH + 40

      fill(darkGrey);

      if (i == 0) {
         text(events[1], locT, locH - 50);
         text(events[0], locT, locH - 70);

         push()
         stroke(highlight)
         strokeWeight(2)
         line(locL, locLH, locL, locLH - 65);
         line(locL, locLH - 70 - lineS, locL, locLH - 70 - lineL)
         line(locL, locLH - 90 - lineS, locL, locLH - 90 - lineL)
         pop()
      }

      if (i == 3) {
         text(events[1], locT, locH - 50);

         push()
         stroke(highlight)
         strokeWeight(2)
         line(locL, locLH, locL, locLH - 65);
         line(locL, locLH - 70 - lineS, locL, locLH - 70 - lineL)
         pop()
      }

      if (i == 5) {
         text(events[1], locT, locH - 50);
         text(events[2], locT, locH - 70);
         text(events[7], locT, locH - 90);

         push()
         stroke(highlight)
         strokeWeight(2)
         line(locL, locLH, locL, locLH - 65);
         line(locL, locLH - 70 - lineS, locL, locLH - 70 - lineL)
         line(locL, locLH - 90 - lineS, locL, locLH - 90 - lineL)
         line(locL, locLH - 110 - lineS, locL, locLH - 110 - lineL)
         pop()
      }

      if (i == 6) {
         text(events[8], locT, locH - 50);

         push()
         stroke(highlight)
         strokeWeight(2)
         line(locL, locLH, locL, locLH - 65);
         line(locL, locLH - 70 - lineS, locL, locLH - 70 - lineL)
         pop()


      }

      if (i == 8) {
         text(events[3], locT, locH - 50);

         push()
         stroke(highlight)
         strokeWeight(2)
         line(locL, locLH, locL, locLH - 65);
         line(locL, locLH - 70 - lineS, locL, locLH - 70 - lineL)
         pop()
      }

      if (i == 10) {
         text(events[5], locT, locH - 50);
         text(events[1], locT, locH - 70);

         push()
         stroke(highlight)
         strokeWeight(2)
         line(locL, locLH, locL, locLH - 65);
         line(locL, locLH - 70 - lineS, locL, locLH - 70 - lineL)
         line(locL, locLH - 90 - lineS, locL, locLH - 90 - lineL)
         pop()
      }

      if (i == 12) {
         text(events[6], locT, locH - 50);
         text(events[1], locT, locH - 70);

         push()
         strokeWeight(2)
         stroke(highlight)
         line(locL, locLH, locL, locLH - 65);
         line(locL, locLH - 70 - lineS, locL, locLH - 70 - lineL)
         line(locL, locLH - 90 - lineS, locL, locLH - 90 - lineL)
         pop()
      }

      push()
      fill(grey)
      if (i == 0 || i == 12) {
         fill(highlight)
         text("12", locTxt, locHTxt);
      } else if (i == 3 || i == 5 || i == 6 || i == 8 || i == 10) {
         fill(highlight)
         text(i, locTxt, locHTxt);
      } else {
         fill(grey)
         text(i, locTxt, locHTxt)
      }
      pop()

   }

   const logoH = logo.height / 12
   const logoW = logo.width / 12
   const logoX = 20
   const logoY = height - 55

   const title = "application"
   const title2 = "timeline"

   const spacing = 25
   const txtH = logoY + spacing

   push()
   fill(lightGrey)
   textSize(30)
   text(title, width - 300 + spacing, txtH)
   pop()
   push()
   fill(grey)
   textSize(30)
   text(title2, width - 155 + spacing, txtH)
   pop()

   image(logo, logoX, logoY, logoW, logoH)


}