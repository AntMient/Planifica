# Planifica
![image](https://github.com/AntMient/Planifica/assets/102553238/8054df10-387c-475f-b74f-aeb363b49bd6)
## User can add notes
As a user, I want to be able to add notes, so that I can take into account my activities or duties.

- Given that I am on the main view
Then I can see a form for notes with title and content field.
When a click the "Keep it" button
Then I see a new note created underneath.

## User can include custom color while creating a note
As a user, I want to be able to set a specific color to my note.

- Given that I am on the main view
And I am using the note creation form.
- When I click the color palette icon
Then I see a palette of available colors ready to be selected.
- When I click on a color, the palette closes up, the note changes its color
And I can continue with the creation of the note.

## User sees a list of added notes
As a user, I can see a list of my notes, so that I can check them at any time.

- Given that I am on the main view
Then I see a list of my notes sorted by creation date (newest first).

## User can change the color of a note
As a user, I can change the color of any of the created notes so that I can keep them organized.

- Given that I am on the main view
Then I see a list of my notes.
- When I click the color palette icon of any note
Then I see a palette of available colors ready to be selected.
- When I click on a color, the palette closes up and the note changes its color.

## User can delete a note
As a user, I want to be able to delete notes that are nonrelevant for me anymore.

- Given that I am on the main view
Then I see previously created notes.
- When I click the trash icon\ Then the current note will disappear from the notes view and be included in the trash view.

## User can see the sidebar
As a user, I can see a sidebar with two links, so that I can explore two views depending on my needs.

- Given that I am on the main view
Then I see a link to notes -main- view and a link to trash view.

## User can see deleted notes in trash view
As a user, I can see my deleted notes.

- Given that I am on the main view
When I click the "Trash" link
Then I see a list of deleted notes.

## User can permanently delete notes
As a user, I want to be able to delete permanently a deleted note, so that I cannot see them anymore.

- Given that I am on the trash view
Then I see a list of deleted notes.
- When I click the trash icon button
Then its parent note will be deleted permanently.


## User can recover deleted notes
As a user, I want to be able to recover a deleted note.

- Given that I am on the trash view
Then I see a list of deleted notes.
- When I click the arrow up icon button
Then current note will be recovered and shown in the notes view again.
