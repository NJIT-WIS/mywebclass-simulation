import io  # import the `io` module to handle input/output operations
import os
import sys  # import the `sys` module to interact with the Python interpreter and access command line arguments
from faker import Faker  # import the `Faker` class from the `faker` module to generate fake data
from git import Repo
from app import main, console_out, get_argument_as_string  # import the `main` function from the `app` module


def test_with_command_line_argument():
    """Tests what happens when a command line argument is present."""
    fake = Faker()  # create a Faker object to generate fake data
    name = fake.name()  # generate a fake name
    # set the command line argument for the test as a list, where the first item is the script name and the second
    # item is the fake name
    sys.argv = ['myscript', name]
    # define the expected output as a string that says "Hello, [fake name]"
    expected_output = f"Hello, {name}\n"
    # capture the output of the `main` function to a string using the `capture_output` helper function
    captured_output = capture_output(main)
    # assert that the captured output is equal to the expected output, otherwise raise an error that says "Does not
    # Show Expected Output"

    assert captured_output == expected_output, "Does not Show Expected Output"


def test_without_command_line_argument():
    """Tests what happens when a command line argument is not present."""
    # set the command line argument for the test as a list, where the only item is the script name
    sys.argv = [
        'myscript']
    # define the expected output as a string that says "Hello, "
    expected_output = "Hello, \n"
    # capture the output of the `main` function to a string using the `capture_output` helper function
    captured_output = capture_output(
        main)
    # assert that the captured output is equal to the expected output, otherwise raise an error that says "Does not
    # Show Expected Output"
    assert captured_output == expected_output, "Does not Show Expected Output"


def test_console_out():
    """Tests console Output"""
    expected_output = "Test\n"
    captured_output = capture_output(lambda: console_out("Test"))
    assert captured_output == expected_output, "Incorrect output from console_out"


def test_get_argument_as_string_with_default_index():
    """Tests getting the argument with the default index"""
    sys.argv = ['myscript', 'Test']
    result = get_argument_as_string()
    assert result == "Test", "Incorrect argument returned"


def capture_output(func):
    """Helper function that captures the output of a function to a string."""
    captured_output = io.StringIO()  # create a `StringIO` object to capture output to a string
    sys.stdout = captured_output  # set the standard output stream to the `captured_output` object
    func()  # call the function passed as an argument to the `capture_output` function
    sys.stdout = sys.__stdout__  # reset the standard output stream to its original value
    return captured_output.getvalue()  # return the captured output as a string


def test_dockerfile():
    f = open("Dockerfile", "r")
    assert "CMD" in f.read(), "Can't find CMD in Dockerfile"
