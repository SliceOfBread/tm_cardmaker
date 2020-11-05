# tm_cardmaker

Web App for people to make fan cards for the game Terraforming Mars.

This is currently 100% client side. It works best on a desktop/laptop but probably works on tablets and even (painfully) on phones.
You can access it at https://sliceofbread.neocities.org/tm/tm_cardmaker.html

(The below is from https://boardgamegeek.com/thread/2433226/article/34902171#34902171 and is not an endorsement of this project.)

From Jacob Fryxelius:
"Hi fellow terraformers!

FryxGames is very pleased with the creativity and imagination sparked by TM. It has been one of the design goals to inspire people, and this is proof of our success in that regard, so we couldn't be more happy.

Just to avoid any conflicts of interest, please mark all cards 'fan made' so there is a clear distinction between official and non-official content. And if you publish the cards, you'll probably want to avoid using copyrighted artwork. We also want to remind you that fan-made content may not be used commercially.

Other than that, feel free to continue the creative journey of expanding your Terraforming Mars world!

Cheers!"

##How to Use

This part will assume you want to make a normal project. Corporation or Prelude cards are similar.
- Click 'File'
- Click 'New from Template'
- Click one of the templates that appears. For this example let's choose 'Green Card'
- On the right (possibly bottom if you have a small screen) you will see the list of layers. Let's set the cost of the card by first selecting that layer. To start, it is labelled  'Text:Cost'. Click that.
- That opens up all the information for the layer. Where it is positioned, the font, etc. Change the text, which is in the box jest below 'height'. It currently says 'Cost'. Change it to a number. To see the change, you need to 'tab' or click outside this box. If you felt like the number wasn't in the right spot, you can adjust the 'x' and 'y' to move it. If you want the font to be bigger or smaller, adjust the 'height'. You can also change the font/color. Click 'Text:Cost' when you're done (note you can change the layer name from 'Text:Cost' to anything else that you prefer.
- The above holds for all the text layers. Additionally, if you have longer text, you can use 'width' to set the maximum width a line can be (in pixels) and you can use 'V space' to adjust the line-to-line spacing when the program splits your text across multiple lines. There's also a 'Justify' selection if you want your text to be centered, aligned on the left or right.
- Other than text, there are a few other things already in your card.
- 'Base' is just the size of your card, in pixels and the background color.
- 'Green Card' is almost everything else you see (sans text). Generally you won't adjust this layer.
- 'No Requirement' is that little graphic near the card cost. In this case the card has no requirements.
- Let's change the card to a card with a requirement.
- Delete the 'No Requirement' layer by clicking the 'X' next to its name.
- On the left menu, click 'Add Block' then 'Requirements' then 'Min Requirement (small)'. Wow that is NOT small!
- On the right, the layer has been added 'Min Requirement (sma'. Click it. Under 'Presets' choose the obvious 'Min Small'. Things should look much more normal. There are presets for almost anything you add. Some are more useful than others
- Let's require an Ocean tile. On the left click 'Tiles' then 'Ocean'. On the right, click the new layer 'Ocean'. There is one preset, 'Standard'. Hmm, that is not very useful.
- Change 'X' to 214 and 'y' to 87. Change 'width' to 67 (and watch height will change automatically). Mostly you will leave the 'Lock aspect ratio' box checked but if you want to change height and width independently, just uncheck it.

A couple other things to highlight:
- If you want to use an image from the Web (with permission of course), that's under 'Add Block' -> 'User Images' -> 'Load Web Image'.
- If you want to use an image from your computer, it's the same as above but 'Load Local Image'
- You might want the above (or some other) layer to look like it's in the background. Drag the layer name to where you want it. The layers are draw, in order, from the top of the list to the bottom. 'Base' is always the first layer.
- If you want to use a font from the web (and this has only been checked with Google fonts https://fonts.google.com/) it hopefully has something like the google fonts and you can add that using 'Add Block' -> 'Add Web Font'. Here's and example from Google of what to look for to paste in the box that pops up:
<link href="https://fonts.googleapis.com/css2?family=Turret+Road:wght@400;700;800&display=swap" rel="stylesheet"> OR just the URL https://fonts.googleapis.com/css2?family=Turret+Road:wght@400;700;800&display=swap
- You can save your project using the 'File' -> 'Save as Project'. This saves your project as an image. This is especially important if you used any local (non-web) image files. This image can also be shared with others who might want to translate or modify your card.
- You can later load one of these project images using 'File' -> 'Clear & Load Project'

