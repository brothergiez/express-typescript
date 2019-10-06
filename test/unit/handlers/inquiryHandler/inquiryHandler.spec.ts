import inquiryHandler from '../../../../src/handlers/inquiryHandler/inquiryHandler';
import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';

const { expect } = chai;
chai.should();
chai.use(sinonChai);
chai.use(chaiAsPromised);

describe('Inquiry Handler', () => {
  const sandbox = sinon.createSandbox();
  let mockRequest;
  let mockResponse;

  beforeEach(() => {
    mockRequest = {
      "name": 22,
      "nik": "123456H",
      "age": 27
    };

    mockResponse = {
      send: sandbox.stub(),
    };
  })

  afterEach(() => {
    mockRequest = null;
    mockResponse = null;
    sandbox.restore();
  })

  it('should return result if success', async () => {
    const mockResult = {
      message: 'Success'
    };
    await inquiryHandler(mockRequest, mockResponse);
    expect(mockResponse.send).to.have.been.calledWith(mockResult);
  });
});