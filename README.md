3D Printing
===========

This repository contains some experiments in 3D printing. I'm using
[OpenJSCAD](http://openjscad.org/) to design the models and export STL
files.

## Usage

You can drop the source files in this repository into the viewer at
[OpenJSCAD](http://openjscad.org/). Form there you can generate an STL
file, which you can then print. I used
[a third party service](https://www.3dprint-uk.co.uk/) to print
prototypes.

The resolution on some of the curves is dropped for now to allow the
models to render in a reasonable amount of time. Before generating the
STL files and sending them to the printer make sure you increase the
resolution. You'll spot a couple of comments in the Netrunner token
file showing you what to change.

## Netrunner

Currently the repository contains two tokens designed to replace
those that come in the box for
[Netrunner](https://www.fantasyflightgames.com/en/products/android-netrunner-the-card-game/).

* Credit / Advancement
* Virus / Power

### Notes

I printed these as prototypes and discovered that the virus / power
token isn't ready. It's too small and the detail on the power side
isn't 3D enough. I'll update these files at some point, but don't
bother printing the virus / power token as is.

When I submitted the STL files the prices were quite high because the
files contain a lot of errors. I built these thinking like a
mathematician and apparently that doesn't work with CAD files. In
particular, two shapes can't be joined if they simply share a face,
they must actually overlap. The 3D-printing service I used were able
to fix the files and they came out great but I'm not sure how they
did that. If you've any suggestions I'd love to hear them!

## X-Wing Miniatures

The `x-wing` directory contains a range ruler for the
[X-Wing Miniatures Game](https://www.fantasyflightgames.com/en/products/x-wing/).

This is a customised template I printed out with my name and favourite
faction. It'll be fairly easy to change the name (if it's short) and
I've already created shapes for all the
factions. [The svg files](x-wing/raw-images) I used to generate the
code for the text and icons are included in this repo as well.

### Notes

If I printed this again I would make it a little bit thicker. Since it
has been 3D-printed there's no need to stay at cardboard thickness!
This would give it a bit more strength and make the 3D detail at the
range boundaries a little more obvious.

This file was also subject to the same printing problems as the
Netrunner tokens above. If you've any advice on fixing the files to
make them printable I'd be very grateful.
