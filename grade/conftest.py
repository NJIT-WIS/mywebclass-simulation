import pytest
from faker import Faker


@pytest.fixture(scope='session', autouse=True)
def faker_session_locale():
    return ['en']


@pytest.fixture(scope='session', autouse=True)
def faker_seed():
    return 4321
