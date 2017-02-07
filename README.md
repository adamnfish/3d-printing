3D Printing
===========

This repository contains some experiments in 3D printing. I'm using
[OpenJSCAD](http://openjscad.org/) to design the models and export
`.stl` files.

## Usage

You can drop the source files in this repository into the viewer at
[OpenJSCAD](http://openjscad.org/). Form there you can generate an STL
file, which you can then print. I used
[a third party service](https://www.3dprint-uk.co.uk/) to print
prototypes.

## Netrunner

Currently the the repo contains two Netrunner tokens:

* Credit / Advancement
* Virus / Power

### Notes

I printed these as prototypes and discovered that the virus / power
token isn't ready. It's too small and the detail on the power side
isn't 3d enough. I'll update these files at some point, but don't
bother printing the virus / power token as is.

When I submitted the STL files the prices were quite high because the
files contain a lot of errors. I built these thinking like a
mathematician and apparently that doesn't work with CAD files. In
particular, two shapes can't be joined if they simply share a face,
they must actually overlap. The 3D-printing service I used were able
to fix the files and they came out great but I'm not sure how they
did that. If you've any suggestions I'd love to hear them!
