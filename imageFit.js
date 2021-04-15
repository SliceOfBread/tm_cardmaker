// This code is based on (https://github.com/mapbox/potpack) license by
// ISC License

// Copyright (c) 2018, Mapbox

// Permission to use, copy, modify, and/or distribute this software for any purpose
// with or without fee is hereby granted, provided that the above copyright notice
// and this permission notice appear in all copies.

// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
// REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND
// FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
// INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS
// OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER
// TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF
// THIS SOFTWARE.
//////////////////////////////////////////////////////////////////////////////
// input is an array of Images (or any object with width and height properties)
// output is an object = {container:{width:n, height:m}, pos:[{x:a,y:b},...]}

function fitImages(imgList, minWidth) {

    let boxes = [];
    let pos = [];
    let order = [];
    for (let i=0; i < imgList.length; i++) {
        boxes[i] = {};
        boxes[i].w = imgList[i].width;
        boxes[i].h = imgList[i].height;
        pos[i] = {};
        order[i] = i;
    }

    // calculate total box area and maximum box width
    let area = 0;
    let maxWidth = 0;

    for (let i$1 = 0, list = boxes; i$1 < list.length; i$1 += 1) {
        let box = list[i$1];

        area += box.w * box.h;
        maxWidth = Math.max(maxWidth, box.w);
    }

    // sort the boxes for insertion by height, descending
    //boxes.sort(function (a, b) { return b.h - a.h; });
    order.sort(function (a, b) { return boxes[b].h - boxes[a].h; });

    // aim for a squarish resulting container,
    // slightly adjusted for sub-100% space utilization
    let startWidth = Math.max(Math.ceil(Math.sqrt(area / 0.9)), maxWidth, minWidth);

    // start with a single empty space, unbounded at the bottom
    let spaces = [{x: 0, y: 0, w: startWidth, h: Infinity}];

    let width = 0;
    let height = 0;

    for (let i$2 = 0, list$1 = boxes; i$2 < list$1.length; i$2 += 1) {
        // look through spaces backwards so that we check smaller spaces first
        let box$1 = list$1[order[i$2]];

        for (let i = spaces.length - 1; i >= 0; i--) {
            let space = spaces[i];

            // look for empty spaces that can accommodate the current box
            if (box$1.w > space.w || box$1.h > space.h) { continue; }

            // found the space; add the box to its top-left corner
            // |-------|-------|
            // |  box  |       |
            // |_______|       |
            // |         space |
            // |_______________|
            box$1.x = space.x;
            box$1.y = space.y;
            pos[order[i$2]].x = space.x;
            pos[order[i$2]].y = space.y;

            height = Math.max(height, box$1.y + box$1.h);
            width = Math.max(width, box$1.x + box$1.w);

            if (box$1.w === space.w && box$1.h === space.h) {
                // space matches the box exactly; remove it
                let last = spaces.pop();
                if (i < spaces.length) { spaces[i] = last; }

            } else if (box$1.h === space.h) {
                // space matches the box height; update it accordingly
                // |-------|---------------|
                // |  box  | updated space |
                // |_______|_______________|
                space.x += box$1.w;
                space.w -= box$1.w;

            } else if (box$1.w === space.w) {
                // space matches the box width; update it accordingly
                // |---------------|
                // |      box      |
                // |_______________|
                // | updated space |
                // |_______________|
                space.y += box$1.h;
                space.h -= box$1.h;

            } else {
                // otherwise the box splits the space into two spaces
                // |-------|-----------|
                // |  box  | new space |
                // |_______|___________|
                // | updated space     |
                // |___________________|
                spaces.push({
                    x: space.x + box$1.w,
                    y: space.y,
                    w: space.w - box$1.w,
                    h: box$1.h
                });
                space.y += box$1.h;
                space.h -= box$1.h;
            }
            break;
        }
    }

    let ret = {container:{}};
    ret.container.height = height;
    ret.container.width = width;
    ret.pos = pos;

    return ret;
}