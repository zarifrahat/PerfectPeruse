![alt text](https://perfectperuse.herokuapp.com/assets/perfectperuse-617501f2d58eebf0f075cddbecf85e0bdea22542dc1a381cd0fbb65fcfc7be3c.png "PerfectPeruse")


PerfectPeruse is a website clone of Goodreads. Goodreads is a great website where users can look at books of all genres. It presents all relevent information regarding the book, as well as the reviews on the book by the userbase who has read that book. Logged in users have the additional ability to write their own review of books. They also have the 
ability to curate Bookshelves to hold books of their choosing. 

[PerfectPeruse](https://perfectperuse.herokuapp.com/#/)


##Technologies Used
* Ruby on Rails
* PostgreSQL
* React
* Redux


##Features 
I made a search feature that would look through the database of books and find 
the Book model instances that had the Matching charachters and presented them as a 
dropdown.

I also made a feature that would automatically create bookshelves named "All", "Read", "Currently Reading", and "Want to Read" for every logged in User. The User's My Books page, which is a React/Redux Component, shows whichever Bookshelf they want to look at. I do the switching between the internat state with a  selectedBookshelf: "All" default state. This state changes to another bookshelf name string and allows a rerender of the 
My Books show page.








