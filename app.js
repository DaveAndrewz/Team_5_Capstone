// ARRAY of DEEDS
/* Note: if we decide to go with a multiple random result with different categories, we could put it in an object like this:
const deeds = {
    'general': ['deed0', 'deed1', 'deed3', etc],
    'crazy': ['deed0', 'deed1', 'deed3', etc],
    'fancy': ['deed0', 'deed1', 'deed3', etc]
};
For now, though, I'm going to put them all in one array. We can either do just one random card or multiple random cards from the same array.
*/

const deedsArray = [
    'Volunteer for an hour at an organization of your choice. This good deed brought to you today from Boys and Girls Club of America, help us serve more kids and teens more often.',
    'Take a short walk today. When you are outside, stop and look around you. Take time to appreciate nature This moment of reflection brought to you by the Nature Conservancy Project, join us in protecting our natural world by becoming a member today.',
    'Today is a great day to donate blood! This good deed brought to you by the American Red Cross, each pint of blood you donate can save THREE lives, find your nearest donation site at redcrossblood.org/give.html/find-drive.',
    'Turn the water tap off when you’re shaving, brushing your teeth, or scrubbing the dishes – every drop counts. This good deed brought to you by the Save the Water Foundation, helping us save the water around the world one home at a time.',
    'Hold the door open for a stranger. This good deed brought to you today from Walmart, Save Money. Live Better.',
    'Traffic can get the best of us all. Allow a fellow driver to merge into your lane. This good deed brought to you today from KY Department of Transportation, remember It’s not a race, leave some space.',
    'Tell someone today he/she/they look nice. This good deed brought to you from Armchair Experts Podcast, give it a listen.',
    'Hand someone a penny heads up today and say, “Here. I think this good luck belongs to you.” This good deed brought to you today from Animal Care of Stanford, your hometown vet for hometown pets.',
    'Compliment someone who waits on you today and then ask if you can tell their manager or supervisor the same thing. This good deed brought to you today from Blockbuster, still open in Alaska.',
    'Compliment someone’s nice feature (pretty eyes, beautiful hair, cool hat, “love the boots”, etc.) today. This good deed brought to you by Atari, the favorite gift of the ‘80s.',
    'Stop by a school and sponsor a treat for a student or class (whichever you can afford). This good deed nominated by Jim A. from New Jersey and brought to you by Crayola Crayons, making the sky blue and grass green since 1885.',
    'Go by a laundromat and leave a basket at the front with detergent, fabric softener, and as many quarters you can spare. This good deed brought to you by Downy, smells like a meadow all up in here.',
    'Write a letter or card to a family member or someone who is like family and tell this person all the good things you like about them and then give it to the person. This good deed brought to you today by Hallmark, give a card every day.',
    'When a telemarketer calls you today, instead of yelling at them or hanging up immediately, tell the person nicely that you do not want whatever they’re selling but that you hope they have a good day. This good deed brought to you by AT&T, yes, we still have phone plans.',
    'Donate your lightly worn old clothes or provide a clothes’ gift card (whichever you can afford) to a shelter in your area along with a card that says, “Our past does not determine our future.” This good task brought to you by TJMaxx; we have gift cards.'
];
const deed1 = document.querySelector('#deed1');
const deed2 = document.querySelector('#deed2');
// const button = document.querySelector('#showDeedButton');
// Since the button was loading the deedCard page, it refused to load up the random deeds too. Switching to a load event listener worked.

getRandomDeed = (array) => {
    const randomDeed1 = Math.floor(Math.random() * array.length);
    const randomDeed2 = Math.floor(Math.random() * array.length);
    deed1.innerText = array[randomDeed1];
    deed2.innerText= array[randomDeed2];
}
// button.addEventListener("click", () =>
// getRandomTask(deedsArray));
window.addEventListener("load", () =>
getRandomDeed(deedsArray));