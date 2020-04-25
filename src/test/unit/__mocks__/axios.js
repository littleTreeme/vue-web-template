
const mock = {
  getCode: jest.fn(() => Promise.resolve({
    data: {
      answer: 'mock_yes',
      image: 'mock.png',
    },
  })),
};
export default mock;
