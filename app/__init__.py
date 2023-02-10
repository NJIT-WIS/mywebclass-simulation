"""
This program takes an argument from the command line and outputs a greeting
with the argument as the name.If no argument is provided, it outputs "Hello, "
"""
# pylint: disable=line-too-long

# import the sys module
import sys


# Define the main function
def main():
    """
     The main function of the program.
     """
    # Initialize an empty string "name"
    name = ""
    # Check if there is more than one argument passed through the command line
    if len(sys.argv) > 1:
        # If yes, then set the first argument as the "name"
        name = sys.argv[1]
    # Create the output string using f-string,
    # which is a way to embed expressions inside string literals
    output = f"Hello, {name}"
    # Call the "console_out" function and pass the "output" string as an argument
    console_out(output)


# Define the "get_argument_as_string" function that takes one argument "arg" with default value of 1, and returns a
# string
def get_argument_as_string(arg: int = 1) -> str:
    """
        Returns the argument passed through the command line as a string.

        Arguments:
            arg (int, optional): The index of the argument. Defaults to 1.

        Returns:
            str: The argument passed through the command line.
        """
    # Return the argument from sys.argv at the specified index "arg"
    return sys.argv[arg]


# Define the "console_out" function that takes one argument "output"
def console_out(output):
    # Print the "output" string to the console
    """
    Outputs a string to the console.

    Arguments:
        output (str): The string to be outputted.
    """
    print(output)


# Check if the script is run as a standalone program
if __name__ == '__main__':
    # If yes, then call the "main" function
    main()
