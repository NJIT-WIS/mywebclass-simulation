import pytest
from playwright.sync_api import Playwright, sync_playwright

def test_mywebclass_homepage(playwright: Playwright):
    with playwright.chromium.launch(headless=True) as browser:
        with browser.new_context() as context:
            # Set the viewport size to simulate a desktop browser
            page = context.new_page(viewport_size={"width": 1280, "height": 800})
            # Go to the MyWebClass.org homepage
            page.goto("https://mywebclass.org/")
            # Check that the page title is correct
            assert page.title() == "MyWebClass.org"
            # Check that the "Start Here" button is present
            assert page.locator("button:has-text('Start Here')").is_visible()
            # Check that the "Subscribe" button is present
            assert page.locator("button:has-text('Subscribe')").is_visible()
            # Check that the navigation links are present
            assert page.locator("a:has-text('Content Template')").is_visible()
            assert page.locator("a:has-text('Our Story')").is_visible()
            assert page.locator("a:has-text('Privacy Policy')").is_visible()
            # Check that the social media links are present
            assert page.locator("a i.bi-linkedin").is_visible()
            assert page.locator("a i.bi-twitter").is_visible()
            assert page.locator("a i.bi-facebook").is_visible()
