function creditToken() {
  var cylinderFn = 32, // 128 for printing
  sphereFn = 96, // 256 for printing
  maskSphere = sphere({r: 180, center: true, fn: sphereFn, type: "geodesic"}),
  dome = cylinder({r: 16, h: 3, center: true, fn: cylinderFn})
    .subtract(
      maskSphere
        .translate([0, 0, -180])
        .setColor(0.2, 0.2, 0.2)
    )
    .intersect(
      maskSphere
        .translate([0, 0, -178.5])
        .setColor(0.8, 0.8, 0.9)
    )
    .translate([0, 0, 0]),
  ring = cylinder({r: 20, h: 3, center: true, fn: cylinderFn})
    .subtract(cylinder({r: 16, h: 3, center: true, fn: cylinderFn}))
    .setColor(0.2, 0.2, 0.2),
  protrudingRing = cylinder({r: 15.9, h: 1.8, center: true, fn: cylinderFn})
    .subtract(cylinder({r: 14.9, h: 1.8, center: true, fn: cylinderFn}))
    .translate([0, 0, 1])
    .setColor(1, 1, 1),
  ringFix = cylinder({r: 17, h: 1, center: true, fn: cylinderFn})
    .subtract(cylinder({r: 15.8, h: 1, center: true, fn: cylinderFn}))
    .translate([0, 0, 1])
    .setColor(0.2, 0.2, 0.2),
  icon = 	creditIcon()
    .translate([0, 0, -1]),
  token = ring
    .union(dome)
    .union(protrudingRing)
    .union(ringFix)
    .union(icon)
    .rotateX(180);
  return token.scale(0.9);
}

function virus() {
  var	bhCentreCircle = centeredDisc(6.2, 0.3)
    .subtract(centeredDisc(5.2, 0.3))
    .translate([0, 0, 0.65]),
  bhTendril1 = centeredDisc(7, 0.5)
    .subtract(
      centeredDisc(6.5, 0.5)
        .translate([0.75, 0, 0])
    )
    .translate([7.5, 0, 0.75]),
  bhTendril2 = bhTendril1.rotateZ(120),
  bhTendril3 = bhTendril1.rotateZ(240),
  bhFillCentre = centeredDisc(1.5, 0.5)
    .translate([0, 0, 0.75]),
  biohazard = bhCentreCircle
    .union(bhTendril1)
    .union(bhTendril2)
    .union(bhTendril3)
    .union(bhFillCentre)
    .setColor(1, 0, 0);
  return biohazard;
}

function power() {
  var coreBorder = centeredDisc(4.1, 0.6)
    .translate([0, 0, -0.3]),
  rim = centeredDisc(14, 0.7)
    .subtract(centeredDisc(13, 0.7))
    .translate([0, 0, -0.35])
    .setColor(0.2, 0.2, 0.2),
  shield = centeredDisc(12.9, 0.6)
    .translate([0, 0, -0.3])
    .setColor(0.7,0.7, 0.7),
  glow = centeredDisc(12.5, 0.4)
    .subtract(coreBorder)
    .translate([0, 0, -0.2])
    .setColor(0.9, 0.9, 1),
  core = centeredDisc(4, 0.6)
    .translate([0, 0, -0.3])
    .setColor(0.3, 0.4, 1),
  powerHoleS = centeredDisc(0.4, 0.6)
    .translate([0, 0, -0.3]),
  powerHoleM = centeredDisc(0.7, 0.6)
    .translate([0, 0, -0.3]),
  powerHoleL = centeredDisc(1, 0.6)
    .translate([0, 0, -0.3]),
  smallHoles = powerHoleS,
  mediumHoles = powerHoleM,
  largeHoles = powerHoleL,
  smallHoleCenters = [ [-4, -5], [-5, 10], [-7, -3], [-3, 5], [-1, 8], [2, 7], [4, 4.5], [10, 3], [10, -3.3], [8, -8.5], [1.3, -6], [-8, -6] ],
  mediumHoleCenters = [ [2, -10], [-2, -6], [3, 10], [5.2, -8], [6.6, 2], [9, -5], [11, 0], [-9, 0], [2, 5], [-10, 4], [-1, 11], [-6, 1], [-6, -9], [7, -2.2] ],
  largeHoleCenters = [ [-6, 6], [5, 8], [9, 5.8], [4, -5], [-10, -4], [-1, -9] ],
  makeHoles = function(centers, object, template) {
    var i;
    for (i = 0, l = centers.length; i < l; i++) {
      object = object.union(template.translate([centers[i][0], centers[i][1], 0]));
    }
    return object;
  };
  return shield
    .subtract(coreBorder)
    .subtract(makeHoles(smallHoleCenters, smallHoles, powerHoleS))
    .subtract(makeHoles(mediumHoleCenters, mediumHoles, powerHoleM))
    .subtract(makeHoles(largeHoleCenters, largeHoles, powerHoleL))
    .setColor(0.7, 0.7, 0.7)
    .union(glow)
    .union(core)
    .union(rim);
}

function virusPowerToken() {
  var disk = centeredDisc(14, 0.5)
    .translate([0, 0, 0.25]);
  return disk
    .setColor(0.2, 0.2, 0.2)
    .union(virus())
    .union(power());
}

function centeredDisc(radius, height) {
  var resolution = 32; // 128 for printing
  return linear_extrude({height: height}, CAG.circle({center: [0,0], radius: radius, resolution: resolution}))
    .translate([0, 0, -height / 2]);
}

function creditIcon() {
  var hex = rectangular_extrude(
    [ [10, 11], [-10, 11], [-20, 0], [-10, -11], [10, -11], [20, 0] ],
    { w: 1.5, h: 2, closed: true }
  ),
  pip2 = linear_extrude({height: 2}, new CSG.Polygon2D([ [10, -11], [0, 0], [-6, 0], [4, -11] ]));
  return hex
    .union(pip2)
    .scale(0.5)
    .setColor(1, 1, 1);
}

function main() {
  var credit = creditToken().scale([0.4, 0.4, 0.8]).translate([-20, 0, 0]),
      virusPower = virusPowerToken().scale([0.5, 0.5, 1]).translate([20, 0, 0]),
      tokens = [credit, virusPower];
  return tokens;
  // return [virusPower];
}
