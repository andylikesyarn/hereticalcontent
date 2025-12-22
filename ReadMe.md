## about

This is a repository of everything I used to create an e-zine to capture the feeling and aesthetic of spending time with friends.

## Front Page:

basic nav, image links back to home, links and associated images link to respective volumes/issues.

#### to-do

- [ ] align images
- [ ] add link to vol 2
- [ ] center Marcion

## Volume 3 Main Page:

top left image returns to home

#### to-do

- [ ] left-align about/hide button
- [ ] round corners of about blurb
- [ ] Change position of music blurb
- [ ] round corners of music blurb

### TV feature

- [ ] video playback
- [ ] tv alignment
- [x] about / hide button

#### to-do

- [ ] add bg div
- [ ] round corners of detail blurb
- [ ] connect notes to detail blurb
- [ ] stop TV from moving
- [ ] Change position of detail blurb

### Books feature

For this section, I edited the book spines onto a shelf in Canva, exported a transparent version of the image, and overlaid it on the wallpaper image. Then, I created a button for each book and positioned each button on top of the book, + added event listeners to set popup text and make the details popup visible. When I had them functional and in the right place, I changed the button opacity to 0 so they became invisible. I'm not sure I'd do it this way again, and I actually didn't with the music player or art ticket, but it was fine enough for this one.

This project was my first experience layering different elements on top of one another and doing fine-grained editing of positions of HTML elements without grid or flex. It was a bit challenging to figure out, but easy enough once I got the hang of it. There's ultimately not a lot of super complicated code happening here, it's just tedious things.

#### to-do

- [ ] format cards
- [ ] align cards
- [ ] align within card
- [ ] round corners of detail blurb
- [ ] Change position of detail blurb

### music feature

The music feature has several moving parts:

1. An image of a tape deck (designed and edited in Canva.)
2. A text overlay that says "click for music"
3. the soundcloud popup that shows music and allows selection

Like other parts of this site, it's nothing particularly complicated in terms of code, and it wasn't even particularly tedious. I just used SoundCloud's available embed code, and made the tape deck image a button that opens the SoundCloud music player in a popup window.

### gallery link

- [x] Enable next/prev buttons
- [x] correct Marcion's position
- [ ] correct card alignment
- [ ] format details section
- [x] toggle description view
- [x] about feature

## overall to-do

#### tv to-do

- [ ] add bg div
- [ ] round corners of detail blurb
- [ ] connect notes to detail blurb
- [ ] stop TV from moving
- [ ] Change position of detail blurb

#### book to-do

- [ ] format cards
- [ ] align cards
- [ ] align within card
- [x] round corners of detail blurb
- [x] Change position of detail blurb

#### music to-do

- [ ] align within card
- [x] round corners of detail blurb
- [x] Change position of detail blurb

#### art to-do

- [ ] align within card
- [ ] round corners of detail blurb
- [ ] Change position of detail blurb
- [ ] correct card alignment
- [ ] format details section
- [ ] fix bug facts view
- [ ] fix manic manic manic alignment

## Ways I could have made this easier for myself:

1. Would have been DRAMATICALLY easier to do some of these repetitive elements (like popups and buttons) as React components. I'm much more confident with a lot of data flow concepts in React as well, and consistently found myself thinking about how much easier it would be to do those things in react. 

2. Using more consistent naming conventions for my images would have helped considerably. 

3. Having a database FROM THE START would have been SO helpful. 

4. I'd really like to set up an online database of images and include these in my fetch function, so all images are available on page load. I'm thinking this could prevent some of the lag I'm getting on the live version switching between channels. 

5. Some of the concepts associated with positioning were new to me, and I chose to tech myself by grabbing a code snippet from MDN Webdocs and fiddling around with the values. I struggled with this for TWO HOURS before "giving in" (aka being reasonable) and 

6. I didn't know I wouldn't be able to view embedded videos in Chile. 
