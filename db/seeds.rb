# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.delete_all
Book.delete_all

casey_lee = User.create(username: "Casey Lee", email: "caseylee@gmail.com", password: "123456")

book1 = Book.create!({
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    summary: "Harry Potter's life is miserable. His parents are dead and he's stuck with his heartless relatives, who force him to live in a tiny closet under the stairs. But his fortune changes when he receives a letter that tells him the truth about himself: he's a wizard. A mysterious visitor rescues him from his relatives and takes him to his new home, Hogwarts School of Witchcraft and Wizardry.

After a lifetime of bottling up his magical powers, Harry finally feels like a normal kid. But even within the Wizarding community, he is special. He is the boy who lived: the only person to have ever survived a killing curse inflicted by the evil Lord Voldemort, who launched a brutal takeover of the Wizarding world, only to vanish after failing to kill Harry.

Though Harry's first year at Hogwarts is the best of his life, not everything is perfect. There is a dangerous secret object hidden within the castle walls, and Harry believes it's his responsibility to prevent it from falling into evil hands. But doing so will bring him into contact with forces more terrifying than he ever could have imagined.

Full of sympathetic characters, wildly imaginative situations, and countless exciting details, the first installment in the series assembles an unforgettable magical world and sets the stage for many high-stakes adventures to come.",
    rating: 0
})


book2 = Book.create!({
    title: "A Game of Thrones",
    author: "George R.R. Martin",
    genre: "Fantasy",
    summary: "Here is the first volume in George R. R. Martin’s magnificent cycle of novels that includes A Clash of Kings and A Storm of Swords. As a whole, this series comprises a genuine masterpiece of modern fantasy, bringing together the best the genre has to offer. Magic, mystery, intrigue, romance, and adventure fill these pages and transport us to a world unlike any we have ever experienced. Already hailed as a classic, George R. R. Martin’s stunning series is destined to stand as one of the great achievements of imaginative fiction.

A GAME OF THRONES

Long ago, in a time forgotten, a preternatural event threw the seasons out of balance. In a land where summers can last decades and winters a lifetime, trouble is brewing. The cold is returning, and in the frozen wastes to the north of Winterfell, sinister and supernatural forces are massing beyond the kingdom’s protective Wall. At the center of the conflict lie the Starks of Winterfell, a family as harsh and unyielding as the land they were born to. Sweeping from a land of brutal cold to a distant summertime kingdom of epicurean plenty, here is a tale of lords and ladies, soldiers and sorcerers, assassins and bastards, who come together in a time of grim omens.

Here an enigmatic band of warriors bear swords of no human metal; a tribe of fierce wildlings carry men off into madness; a cruel young dragon prince barters his sister to win back his throne; and a determined woman undertakes the most treacherous of journeys. Amid plots and counterplots, tragedy and betrayal, victory and terror, the fate of the Starks, their allies, and their enemies hangs perilously in the balance, as each endeavors to win that deadliest of conflicts: the game of thrones.

source: georgerrmartin.com ",
    rating: 0
})

book3 = Book.create!({
    title: "Ender's Game",
    author: "Orson Scott Card",
    genre: "Science Fiction",
    summary: "Andrew \"Ender\" Wiggin thinks he is playing computer simulated war games; he is, in fact, engaged in something far more desperate. The result of genetic experimentation, Ender may be the military genius Earth desperately needs in a war against an alien enemy seeking to destroy all human life. The only way to find out is to throw Ender into ever harsher training, to chip away and find the diamond inside, or destroy him utterly. Ender Wiggin is six years old when it begins. He will grow up fast.

But Ender is not the only result of the experiment. The war with the Buggers has been raging for a hundred years, and the quest for the perfect general has been underway almost as long. Ender's two older siblings, Peter and Valentine, are every bit as unusual as he is, but in very different ways. While Peter was too uncontrollably violent, Valentine very nearly lacks the capability for violence altogether. Neither was found suitable for the military's purpose. But they are driven by their jealousy of Ender, and by their inbred drive for power. Peter seeks to control the political process, to become a ruler. Valentine's abilities turn more toward the subtle control of the beliefs of commoner and elite alike, through powerfully convincing essays. Hiding their youth and identities behind the anonymity of the computer networks, these two begin working together to shape the destiny of Earth-an Earth that has no future at all if their brother Ender fails.

Source: hatrack.com",
    rating: 0
})


book4 = Book.create!({
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    genre: "Fantasy",
    summary: "Told in Kvothe's own voice, this is the tale of the magically gifted young man who grows to be the most notorious wizard his world has ever seen.

The intimate narrative of his childhood in a troupe of traveling players, his years spent as a near-feral orphan in a crime-ridden city, his daringly brazen yet successful bid to enter a legendary school of magic, and his life as a fugitive after the murder of a king form a gripping coming-of-age story unrivaled in recent literature.

A high-action story written with a poet's hand, The Name of the Wind is a masterpiece that will transport readers into the body and mind of a wizard.",
    rating: 0
})

book5 = Book.create!({
    title: "A Wizard of Earthsea",
    author: "Ursula K. Le Guin",
    genre: "Fantasy",
    summary: "Ged, the greatest sorcerer in all Earthsea, was called Sparrowhawk in his reckless youth.

Hungry for power and knowledge, Sparrowhawk tampered with long-held secrets and loosed a terrible shadow upon the world. This is the tale of his testing, how he mastered the mighty words of power, tamed an ancient dragon, and crossed death's threshold to restore the balance.",
    rating: 0
})

book6 = Book.create!({
    title: "Of Mice and Men",
    author: "John Steinbeck",
    genre: "Fantasy",
    summary: "The compelling story of two outsiders striving to find their place in an unforgiving world.

Drifters in search of work, George and his simple-minded friend Lennie have nothing in the world except each other and a dream -- a dream that one day they will have some land of their own. Eventually they find work on a ranch in California’s Salinas Valley, but their hopes are doomed as Lennie, struggling against extreme cruelty, misunderstanding and feelings of jealousy, becomes a victim of his own strength.

Tackling universal themes such as the friendship of a shared vision, and giving voice to America’s lonely and dispossessed, Of Mice and Men has proved one of Steinbeck’s most popular works, achieving success as a novel, a Broadway play and three acclaimed films.",
    rating: 0
})


book7 = Book.create!({
    title: "The Old Man and the Sea",
    author: "Ernest Hemingway",
    genre: "Classics",
    summary: "This short novel, already a modern classic, is the superbly told, tragic story of a Cuban fisherman in the Gulf Stream and the giant Marlin he kills and loses — specifically referred to in the citation accompanying the author's Nobel Prize for literature in 1954.
",
    rating: 0
})

book8 = Book.create!({
    title: "1984",
    author: "George Orwell",
    genre: "Classics",
    summary: "Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic purgatory becomes more real. Published in 1949, the book offers political satirist George Orwell's nightmarish vision of a totalitarian, bureaucratic world and one poor stiff's attempt to find individuality. The brilliance of the novel is Orwell's prescience of modern life—the ubiquity of television, the distortion of the language—and his ability to construct such a thorough version of hell. Required reading for students since it was published, it ranks among the most terrifying novels ever written. ",
    rating: 0
})


book9 = Book.create!({
    title: "11/22/63",
    author: "Stephen King",
    genre: "Fantasy",
    summary: "Life can turn on a dime—or stumble into the extraordinary, as it does for Jake Epping, a high school English teacher in Lisbon Falls, Maine. While grading essays by his GED students, Jake reads a gruesome, enthralling piece penned by janitor Harry Dunning: fifty years ago, Harry somehow survived his father’s sledgehammer slaughter of his entire family. Jake is blown away...but an even more bizarre secret comes to light when Jake’s friend Al, owner of the local diner, enlists Jake to take over the mission that has become his obsession—to prevent the Kennedy assassination. How? By stepping through a portal in the diner’s storeroom, and into the era of Ike and Elvis, of big American cars, sock hops, and cigarette smoke... Finding himself in warmhearted Jodie, Texas, Jake begins a new life. But all turns in the road lead to a troubled loner named Lee Harvey Oswald. The course of history is about to be rewritten...and become heart-stoppingly suspenseful.",
    rating: 0
})


book10 = Book.create!({
    title: "Foundation",
    author: "Isaac Asimov",
    genre: "Science Fiction",
    summary: "For twelve thousand years the Galactic Empire has ruled supreme. Now it is dying. But only Hari Seldon, creator of the revolutionary science of psychohistory, can see into the future -- to a dark age of ignorance, barbarism, and warfare that will last thirty thousand years. To preserve knowledge and save mankind, Seldon gathers the best minds in the Empire -- both scientists and scholars -- and brings them to a bleak planet at the edge of the Galaxy to serve as a beacon of hope for a future generations. He calls his sanctuary the Foundation.

But soon the fledgling Foundation finds itself at the mercy of corrupt warlords rising in the wake of the receding Empire. Mankind's last best hope is faced with an agonizing choice: submit to the barbarians and be overrun -- or fight them and be destroyed.",
    rating: 0
})



book11 = Book.create!({
    title: "2001: A Space Odyssey",
    author: "Arthur C. Clarke",
    genre: "Science Fiction",
    summary: "On the Moon, an enigma is uncovered.

So great are the implications of this discovery that for the first time men are sent out deep into our solar system.

But long before their destination is reached, things begin to go horribly, inexplicably wrong...

One of the greatest-selling science fiction novels of our time, this classic book will grip you to the very end.",
    rating: 0
})


book12 = Book.create!({
    title: "The Emperor's Soul",
    author: "Brandon Sanderson",
    genre: "Fantasy",
    summary: "A heretic thief is the empire’s only hope in this fascinating tale that inhabits the same world as the popular novel, Elantris.

Shai is a Forger, a foreigner who can flawlessly copy and re-create any item by rewriting its history with skillful magic. Condemned to death after trying to steal the emperor’s scepter, she is given one opportunity to save herself. Though her skill as a Forger is considered an abomination by her captors, Shai will attempt to create a new soul for the emperor, who is almost dead.

Probing deeply into his life, she discovers Emperor Ashravan’s truest nature—and the opportunity to exploit it. Her only possible ally is one who is truly loyal to the emperor, but councilor Gaotona must overcome his prejudices to understand that Shai’s forgery is as much artistry as it is deception.

Brimming with magic and political intrigue, this deftly woven fantasy delves into the essence of a living spirit. ",
    rating: 0
})


book13 = Book.create!({
    title: "Dune",
    author: "Frank Herbert",
    genre: "Science Fiction",
    summary: "Set in the far future amidst a sprawling feudal interstellar empire where planetary dynasties are controlled by noble houses that owe an allegiance to the imperial House Corrino, Dune tells the story of young Paul Atreides (the heir apparent to Duke Leto Atreides and heir of House Atreides) as he and his family accept control of the desert planet Arrakis, the only source of the 'spice' melange, the most important and valuable substance in the cosmos. The story explores the complex, multi-layered interactions of politics, religion, ecology, technology, and human emotion as the forces of the empire confront each other for control of Arrakis.

Published in 1965, it won the Hugo Award in 1966 and the inaugural Nebula Award for Best Novel. Dune is frequently cited as the world's best-selling sf novel. ",
    rating: 0
})



book14 = Book.create!({
    title: "Matilda",
    author: "Roald Dahl",
    genre: "Fantasy",
    summary: "Matilda is a little girl who is far too good to be true. At age five-and-a-half she's knocking off double-digit multiplication problems and blitz-reading Dickens. Even more remarkably, her classmates love her even though she's a super-nerd and the teacher's pet. But everything is not perfect in Matilda's world. For starters she has two of the most idiotic, self-centered parents who ever lived. Then there's the large, busty nightmare of a school principal, Miss (\"The\") Trunchbull, a former hammer-throwing champion who flings children at will and is approximately as sympathetic as a bulldozer. Fortunately for Matilda, she has the inner resources to deal with such annoyances: astonishing intelligence, saintly patience, and an innate predilection for revenge.

She warms up with some practical jokes aimed at her hapless parents, but the true test comes when she rallies in defense of her teacher, the sweet Miss Honey, against the diabolical Trunchbull. There is never any doubt that Matilda will carry the day. Even so, this wonderful story is far from predictable. Roald Dahl, while keeping the plot moving imaginatively, also has an unerring ear for emotional truth. The reader cares about Matilda because in addition to all her other gifts, she has real feelings..",
    rating: 0
})




book15 = Book.create!({
    title: "The Little Prince",
    author: " Antoine de Saint-Exupéry",
    genre: "Classics",
    summary: "Moral allegory and spiritual autobiography, The Little Prince is the most translated book in the French language. With a timeless charm it tells the story of a little boy who leaves the safety of his own tiny planet to travel the universe, learning the vagaries of adult behaviour through a series of extraordinary encounters. His personal odyssey culminates in a voyage to Earth and further adventures.",
    rating: 0
})




book16 = Book.create!({
    title: "The Stranger",
    author: " Albert Camus",
    genre: "Classics",
    summary: "Through the story of an ordinary man unwittingly drawn into a senseless murder on an Algerian beach, Camus explored what he termed \"the nakedness of man faced with the absurd.\" First published in English in 1946; now in a new translation by Matthew Ward.",
    rating: 0
})



book17 = Book.create!({
    title: "Animal Farm",
    author: "George Orwell",
    genre: "Classics",
    summary: "A farm is taken over by its overworked, mistreated animals. With flaming idealism and stirring slogans, they set out to create a paradise of progress, justice, and equality. Thus the stage is set for one of the most telling satiric fables ever penned –a razor-edged fairy tale for grown-ups that records the evolution from revolution against tyranny to a totalitarianism just as terrible.
When Animal Farm was first published, Stalinist Russia was seen as its target. Today it is devastatingly clear that wherever and whenever freedom is attacked, under whatever banner, the cutting clarity and savage comedy of George Orwell’s masterpiece have a meaning and message still ferociously fresh.",
    rating: 0
})



book18 = Book.create!({
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fantasy",
    summary: "Paulo Coelho's enchanting novel has inspired a devoted following around the world. This story, dazzling in its powerful simplicity and soul-stirring wisdom, is about an Andalusian shepherd boy named Santiago who travels from his homeland in Spain to the Egyptian desert in search of a treasure buried near the Pyramids. Along the way he meets a Gypsy woman, a man who calls himself king, and an alchemist, all of whom point Santiago in the direction of his quest. No one knows what the treasure is, or if Santiago will be able to surmount the obstacles in his path. But what starts out as a journey to find worldly goods turns into a discovery of the treasure found within. Lush, evocative, and deeply humane, the story of Santiago is an eternal testament to the transforming power of our dreams and the importance of listening to our hearts.",
    rating: 0
})