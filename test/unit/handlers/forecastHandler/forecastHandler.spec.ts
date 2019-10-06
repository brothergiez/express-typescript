import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
import forecastHandler from '../../../../src/handlers/forecastHandler/forecastHandler';

const { expect } = chai;
chai.should();
chai.use(sinonChai);
chai.use(chaiAsPromised);

describe('Forecast Handler', () => {
  const sandbox = sinon.createSandbox();
  let mockRequest;
  let mockResponse;

  beforeEach(() => {
    mockRequest = {
      body: {
        name: "Ujang",
        nik: "123456H",
        age: 27
      }
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
    const mockResult = mockRequest.body;
    await forecastHandler(mockRequest, mockResponse);
    expect(mockResponse.send).to.have.been.calledWith(mockResult);
  });
});