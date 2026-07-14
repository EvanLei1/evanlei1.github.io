# This variable can create an empty list of apps
app_list = []

# User inputs the ten most favorite apps
def favorite_app_response():
    # Set the number of apps in order from 1
    num_apps = 0
    # Input a question with an explanation when you are done
    print("What is your favorite apps? Enter the response up to 10 times unless you input 'done.'")
    # Asks the app name 10 times, increasing its order after each response
    while num_apps < 10:
        # App number order from 1 to 10
        num_apps += 1
        # Asks the question about what is the most favorite app
        app_response = input("App name " + str(num_apps) + ": ")
        # Adds the favorite app input into the list, one by one
        app_list.append(app_response)
        # if the user inputs "done," the loop will end early
        if app_response == 'done':
            # Removes the "done" because we don't want to put it in the list
            app_list.remove("done")
            # The input repeats until three responses were filled in and returns a response
            # with the first three apps or more
            while num_apps > 3 and num_apps < 10:
                return "There are " + str(num_apps - 1) + " apps in the list: "
    # Returns the number of favorite apps inserted into the list
    return "There are " + str(num_apps) + " apps in the list: "
    
# Prints the favorite app response with user inputs and a return function
print(favorite_app_response())
# prints the app list
print(str(app_list) + "\n")

# This function shows up if there are exactly three favorite apps.
if len(app_list) > 3:
    # App removal question
    # It is possible to have more than three apps by responding "done"
    print("You have to remove apps you entered on the list until there were three remaining.")
    print("You may enter 'done' if you are done removing the apps.")
    # This function removes a named app by user input and repeats until three apps remain in the list
    def remove_app():
        # Set the number of apps inside the length of the list in how many apps they get.
        num_apps = len(app_list)
        # Inputs which apps the user can remove until there were three remaining or
        # if the user types "done"
        while num_apps > 3:
            # A try-and-except code to prevent a ValueError if the name doesn't match the list
            try:
                # input question in order to remove an app
                remove_named_app = input("Enter the name of the app you want to remove: ")
                app_list.remove(remove_named_app)
                # Removing the app counts as -1
                num_apps -= 1
            except ValueError:
                # If the user inputs "done," the while loop stops
                if remove_named_app == 'done':
                    break
                # Text if you input an input that doesn't match the list
                print("Enter the exact name of the app you typed in the list. It is case sensitive!")
        # Returns the number of favorite apps based on the length of the list
        # It shows the top [number] entries on the list
        return "These are the top " + str(num_apps) + " apps from the app list in ABC order: "
    # Prints the favorite app response with user inputs and a return function after removing
    # several apps.
    print(remove_app())
    # prints the app list in ABC order
    app_list.sort()
    print(app_list)
