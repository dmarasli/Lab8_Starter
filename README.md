# Lab 8 - Starter
Dilara Marasli & Delia McGrath

1. In your own words: Where would you fit your automated tests in your Recipe project development pipeline?

It would be a good idea to test the code before the code is commited as well as before merging it with the main branch. This would make sure that the code runs smoothly initially but would also catch any bugs made from revisions to the code. This way, we can be certain that the code in the main runs effectively. 

2. Would you use an end to end test to check if a function is returning the correct output? (yes/no)

no -- it would be unnnecessary to test the whole workflow. Unit test would be enough to check one function's output.

3. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No, I would be partial to not using unit tests as sending messages has the potential to deal with computer networks, which would make testing it quite difficult.

4. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes, I would be partial to creating a unit test to text the max message length as it would be simple to test and isolate from the other features. It would also be easy to connect the effects the length has on the output.
