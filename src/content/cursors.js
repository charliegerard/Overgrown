const svg = (body) => `<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'>${body}</svg>`;

const MACHETE = svg(
  "<path d='M12 20 L27 3 Q31 2 30 7 L15 23 Z' fill='#d3dadf' stroke='#2e3338' stroke-width='1.2'/>" +
    "<path d='M14 21 L28 5' stroke='#fff' stroke-width='.8' opacity='.8'/>" +
    "<path d='M4 28 L12 20 L15 23 L7 31 Z' fill='#6b3f1d' stroke='#24160a' stroke-width='1.2'/>"
);

const CHAINSAW = svg(
  "<g transform='rotate(45 16 16)'>" +
    "<rect x='13' y='2' width='6' height='18' rx='3' fill='#c9ced3' stroke='#2e3338' stroke-width='1.3' stroke-dasharray='2 1.4'/>" +
    "<rect x='10' y='18' width='12' height='9' rx='2' fill='#f28c1c' stroke='#5a2e05' stroke-width='1.2'/>" +
    "<rect x='12.5' y='26' width='7' height='4' rx='1.5' fill='#2b2b2b'/>" +
    '</g>'
);

const FLAMETHROWER = svg(
  "<g transform='rotate(45 16 16)'>" +
    "<path d='M16 0 C21 5 20 9 16 11 C12 9 11 5 16 0 Z' fill='#ffb300' stroke='#ff3d00' stroke-width='1'/>" +
    "<path d='M16 4 C18 7 17.5 9 16 10 C14.5 9 14 7 16 4 Z' fill='#fff3b0'/>" +
    "<rect x='14.3' y='10' width='3.4' height='9' fill='#8a9096' stroke='#2e3338' stroke-width='1'/>" +
    "<rect x='10.5' y='18' width='11' height='8' rx='2' fill='#b33a1a' stroke='#3a1206' stroke-width='1.2'/>" +
    "<rect x='13' y='25' width='6' height='5' rx='1' fill='#2b2b2b'/>" +
    '</g>'
);

const toCursor = (svgText, x, y) => `url("data:image/svg+xml,${encodeURIComponent(svgText)}") ${x} ${y}, crosshair`;

const CURSORS = {
  rusty: toCursor(MACHETE, 20, 12),
  chainsaw: toCursor(CHAINSAW, 22, 10),
  flamethrower: toCursor(FLAMETHROWER, 24, 8),
};

export const cursorFor = (bladeId) => CURSORS[bladeId] || CURSORS.rusty;
