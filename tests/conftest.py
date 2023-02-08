"""Pytest Fixtures"""
# pylint: disable=locally-disabled, multiple-statements, line-too-long

import pytest

@pytest.fixture(scope='session', autouse=True)
def faker_session_locale():
    """Faker Fixture to set language"""
    return ['en']


@pytest.fixture(scope='session', autouse=True)
def faker_seed():
    """Faker Fixture to Set the Seed to force the random values to be the same each run """
    return 4321
