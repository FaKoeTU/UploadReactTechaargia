import { useState } from "react";
import {
  Row,
  Col,
  Card,
  Dropdown,
  ButtonGroup,
  InputGroup,
  Form,
  Button,
} from "react-bootstrap";
import smart from "../images/smart.png";
import nissan from "../images/nissan.png";
import logo from "../images/logo.png";
import { IoIosArrowBack } from "react-icons/io";
import { IoChevronForwardCircleOutline } from "react-icons/io5";

function Home() {
  const [listOfPools, setListOfPools] = useState([
    {
      number: 1,
      amountOfCars: 4,
      amountLeftToRepark: 4,
      totalCapactiy: 4,
      freeChargers: 0,
      cars: [
        {
          type: "Nissan",
          vehicleNumber: 1,
          numberplate: "M M1 1234",
          distanceCoveredToday: 19,
          blocked: false,
          blockedById: 0,
          status: 0, //0 = Plugged in and to repark, 1 = Unplugged and need to repark, 2 = Plugged in Cars Parked, 3 = Unplugged Cars Parked
          chargingStatus: 100,
        },
        {
          type: "Smart",
          vehicleNumber: 2,
          numberplate: "M XV 1512",
          distanceCoveredToday: 23,
          blocked: false,
          blockedById: 0,
          status: 0, //0 = Plugged in and to repark, 1 = Unplugged and need to repark, 2 = Plugged in Cars Parked, 3 = Unplugged Cars Parked
          chargingStatus: 100,
        },
        {
          type: "Nissan",
          vehicleNumber: 3,
          numberplate: "M M3 1245",
          distanceCoveredToday: 12,
          blocked: false,
          blockedById: 0,
          status: 1, //0 = Plugged in and to repark, 1 = Unplugged and need to repark, 2 = Plugged in Cars Parked, 3 = Unplugged Cars Parked
          chargingStatus: 100,
        },
        {
          type: "Smart",
          vehicleNumber: 4,
          numberplate: "M T1 5126",
          distanceCoveredToday: 16,
          blocked: false,
          blockedById: 0,
          status: 0, //0 = Plugged in and to repark, 1 = Unplugged and need to repark, 2 = Plugged in Cars Parked, 3 = Unplugged Cars Parked
          chargingStatus: 100,
        },
      ],
    },
    {
      number: 2,
      amountOfCars: 7,
      amountLeftToRepark: 3,
      totalCapactiy: 7,
      freeChargers: 2,
      cars: [
        {
          type: "Nissan",
          vehicleNumber: 1,
          numberplate: "M P2 4114",
          distanceCoveredToday: 32,
          blocked: false,
          blockedById: 0,
          status: 0, //0 = Plugged in and to repark, 1 = Unplugged and need to repark, 2 = Plugged in Cars Parked, 3 = Unplugged Cars Parked
          chargingStatus: 100,
        },
        {
          type: "Nissan",
          vehicleNumber: 2,
          numberplate: "M PP 5225",
          distanceCoveredToday: 5,
          blocked: false,
          blockedById: 0,
          status: 2, //0 = Plugged in and to repark, 1 = Unplugged and need to repark, 2 = Plugged in Cars Parked, 3 = Unplugged Cars Parked
          chargingStatus: 100,
        },
        {
          type: "Nissan",
          vehicleNumber: 3,
          numberplate: "M C3 1412",
          distanceCoveredToday: 25,
          blocked: false,
          blockedById: 3,
          status: 1, //0 = Plugged in and to repark, 1 = Unplugged and need to repark, 2 = Plugged in Cars Parked, 3 = Unplugged Cars Parked
          chargingStatus: 100,
        },
        {
          type: "Smart",
          vehicleNumber: 4,
          numberplate: "M P3 1456",
          distanceCoveredToday: 19,
          blocked: false,
          blockedById: 0,
          status: 2, //0 = Plugged in and to repark, 1 = Unplugged and need to repark, 2 = Plugged in Cars Parked, 3 = Unplugged Cars Parked
          chargingStatus: 100,
        },
        {
          type: "Nissan",
          vehicleNumber: 5,
          numberplate: "M KP 123X",
          distanceCoveredToday: 8,
          blocked: false,
          blockedById: 0,
          status: 1, //0 = Plugged in and to repark, 1 = Unplugged and need to repark, 2 = Plugged in Cars Parked, 3 = Unplugged Cars Parked
          chargingStatus: 100,
        },
        {
          type: "Nissan",
          vehicleNumber: 6,
          numberplate: "M CI 1894",
          distanceCoveredToday: 7,
          blocked: true,
          blockedById: 2,
          status: 2, //0 = Plugged in and to repark, 1 = Unplugged and need to repark, 2 = Plugged in Cars Parked, 3 = Unplugged Cars Parked
          chargingStatus: 100,
        },
        {
          type: "Nissan",
          vehicleNumber: 7,
          numberplate: "M C3 1412",
          distanceCoveredToday: 3,
          blocked: false,
          blockedById: 0,
          status: 3, //0 = Plugged in and to repark, 1 = Unplugged and need to repark, 2 = Plugged in Cars Parked, 3 = Unplugged Cars Parked
          chargingStatus: 100,
        },
      ],
    },
    {
      number: 3,
      amountOfCars: 3,
      amountLeftToRepark: 0,
      totalCapactiy: 3,
      freeChargers: 0,
      cars: [
        {
          type: "Smart",
          vehicleNumber: 1,
          numberplate: "M TU 1234",
          distanceCoveredToday: 10,
          blocked: false,
          blockedById: 0,
          status: 2, //0 = Plugged in and to repark, 1 = Unplugged and need to repark, 2 = Plugged in Cars Parked, 3 = Unplugged Cars Parked
          chargingStatus: 100,
        },
        {
          type: "Smart",
          vehicleNumber: 2,
          numberplate: "M OI 1512",
          distanceCoveredToday: 23,
          blocked: false,
          blockedById: 0,
          status: 2, //0 = Plugged in and to repark, 1 = Unplugged and need to repark, 2 = Plugged in Cars Parked, 3 = Unplugged Cars Parked
          chargingStatus: 100,
        },
        {
          type: "Smart",
          vehicleNumber: 3,
          numberplate: "M XX 9121",
          distanceCoveredToday: 12,
          blocked: false,
          blockedById: 0,
          status: 2, //0 = Plugged in and to repark, 1 = Unplugged and need to repark, 2 = Plugged in Cars Parked, 3 = Unplugged Cars Parked
          chargingStatus: 100,
        },
      ],
    },
    {
      number: 4,
      amountOfCars: 2,
      amountLeftToRepark: 1,
      totalCapactiy: 2,
      freeChargers: 1,
      cars: [
        {
          type: "Nissan",
          vehicleNumber: 1,
          numberplate: "M TU M234",
          distanceCoveredToday: 10,
          blocked: false,
          blockedById: 0,
          status: 1, //0 = Plugged in and to repark, 1 = Unplugged and need to repark, 2 = Plugged in Cars Parked, 3 = Unplugged Cars Parked
          chargingStatus: 100,
        },
        {
          type: "Smart",
          vehicleNumber: 2,
          numberplate: "M RT 1512",
          distanceCoveredToday: 11,
          blocked: false,
          blockedById: 0,
          status: 2, //0 = Plugged in and to repark, 1 = Unplugged and need to repark, 2 = Plugged in Cars Parked, 3 = Unplugged Cars Parked
          chargingStatus: 100,
        },
      ],
    },
    {
      number: 5,
      amountOfCars: 11,
      amountLeftToRepark: 7,
      totalCapactiy: 12,
      freeChargers: 5,
      cars: [
        {
          type: "Nissan",
          vehicleNumber: 1,
          numberplate: "M CD 4114",
          distanceCoveredToday: 32,
          blocked: false,
          blockedById: 0,
          status: 0, //0 = Plugged in and to repark, 1 = Unplugged and need to repark, 2 = Plugged in Cars Parked, 3 = Unplugged Cars Parked
          chargingStatus: 100,
        },
        {
          type: "Smart",
          vehicleNumber: 2,
          numberplate: "M KI 5225",
          distanceCoveredToday: 5,
          blocked: false,
          blockedById: 0,
          status: 2, //0 = Plugged in and to repark, 1 = Unplugged and need to repark, 2 = Plugged in Cars Parked, 3 = Unplugged Cars Parked
          chargingStatus: 100,
        },
        {
          type: "Nissan",
          vehicleNumber: 3,
          numberplate: "M KI 6412",
          distanceCoveredToday: 25,
          blocked: false,
          blockedById: 3,
          status: 1, //0 = Plugged in and to repark, 1 = Unplugged and need to repark, 2 = Plugged in Cars Parked, 3 = Unplugged Cars Parked
          chargingStatus: 100,
        },
        {
          type: "Smart",
          vehicleNumber: 4,
          numberplate: "M FU 1236",
          distanceCoveredToday: 19,
          blocked: false,
          blockedById: 0,
          status: 2, //0 = Plugged in and to repark, 1 = Unplugged and need to repark, 2 = Plugged in Cars Parked, 3 = Unplugged Cars Parked
          chargingStatus: 100,
        },
        {
          type: "Nissan",
          vehicleNumber: 5,
          numberplate: "M KP 12XX",
          distanceCoveredToday: 8,
          blocked: false,
          blockedById: 0,
          status: 1, //0 = Plugged in and to repark, 1 = Unplugged and need to repark, 2 = Plugged in Cars Parked, 3 = Unplugged Cars Parked
          chargingStatus: 100,
        },
        {
          type: "Nissan",
          vehicleNumber: 6,
          numberplate: "M HG 1511",
          distanceCoveredToday: 7,
          blocked: true,
          blockedById: 2,
          status: 2, //0 = Plugged in and to repark, 1 = Unplugged and need to repark, 2 = Plugged in Cars Parked, 3 = Unplugged Cars Parked
          chargingStatus: 100,
        },
        {
          type: "Smart",
          vehicleNumber: 7,
          numberplate: "M TR 1412",
          distanceCoveredToday: 41,
          blocked: false,
          blockedById: 0,
          status: 1, //0 = Plugged in and to repark, 1 = Unplugged and need to repark, 2 = Plugged in Cars Parked, 3 = Unplugged Cars Parked
          chargingStatus: 100,
        },
        {
          type: "Smart",
          vehicleNumber: 8,
          numberplate: "M ZU 6342",
          distanceCoveredToday: 18,
          blocked: false,
          blockedById: 0,
          status: 1, //0 = Plugged in and to repark, 1 = Unplugged and need to repark, 2 = Plugged in Cars Parked, 3 = Unplugged Cars Parked
          chargingStatus: 100,
        },
        {
          type: "Smart",
          vehicleNumber: 9,
          numberplate: "M DF 1213",
          distanceCoveredToday: 4,
          blocked: false,
          blockedById: 0,
          status: 2, //0 = Plugged in and to repark, 1 = Unplugged and need to repark, 2 = Plugged in Cars Parked, 3 = Unplugged Cars Parked
          chargingStatus: 100,
        },
        {
          type: "Nissan",
          vehicleNumber: 10,
          numberplate: "M GD 1231",
          distanceCoveredToday: 17,
          blocked: false,
          blockedById: 0,
          status: 1, //0 = Plugged in and to repark, 1 = Unplugged and need to repark, 2 = Plugged in Cars Parked, 3 = Unplugged Cars Parked
          chargingStatus: 100,
        },
        {
          type: "Smart",
          vehicleNumber: 11,
          numberplate: "M ZU 5878",
          distanceCoveredToday: 14,
          blocked: false,
          blockedById: 0,
          status: 0, //0 = Plugged in and to repark, 1 = Unplugged and need to repark, 2 = Plugged in Cars Parked, 3 = Unplugged Cars Parked
          chargingStatus: 100,
        },
      ],
    },
  ]);

  const [poolsThatNeedToBeReparked, setPoolsThatNeedToBeReparked] = useState(4);
  const [totalRemaining, setTotalRemaining] = useState(15);
  const [showDetails, setShowDeepDive] = useState(false);
  const [deepDive, setDeepDive] = useState({});
  const [userId, setUserId] = useState(0);

  const setShowDetails = (input) => {
    setShowDeepDive(true);
    setDeepDive(input);
  };

  const [carToRepark, setCarToRepark] = useState({});
  const [reparked, setAmountReparked] = useState(0);
  const [numberOfBlocked, setNumberOfBlocked] = useState(0);

  const [reparking, setReparking] = useState(false);
  const [chargingStatus, setChargingStatus] = useState("");
  const [showPopUp, setShowPopUp] = useState(false);

  const [username, setUsername] = useState("Max Mustermann");

  const unblock = (numberPlate) => {
    var totalPoolCopy = [...listOfPools];
    var deepDiveCars = deepDive.cars;
    deepDiveCars.find((car) => car.numberplate == numberPlate).blocked = false;
    setDeepDive({ ...deepDive, cars: deepDiveCars });
    const numberToSet = deepDive.number - 1;
    var listOfPoolsCopy = totalPoolCopy[numberToSet];
    listOfPoolsCopy = deepDive;
    totalPoolCopy[numberToSet] = listOfPoolsCopy;
    setListOfPools(totalPoolCopy);
    setNumberOfBlocked(numberOfBlocked - 1);
  };

  const block = (numberPlate) => {
    var totalPoolCopy = [...listOfPools];
    var deepDiveCars = deepDive.cars;
    deepDiveCars.find((car) => car.numberplate == numberPlate).blocked = true;
    deepDiveCars.find((car) => car.numberplate == numberPlate).blockedById =
      userId;
    setDeepDive({ ...deepDive, cars: deepDiveCars });
    const numberToSet = deepDive.number - 1;
    var listOfPoolsCopy = totalPoolCopy[numberToSet];
    listOfPoolsCopy = deepDive;
    totalPoolCopy[numberToSet] = listOfPoolsCopy;
    setListOfPools(totalPoolCopy);
    setNumberOfBlocked(numberOfBlocked + 1);
  };

  const repark = (numberPlate) => {
    var deepDiveCars = deepDive.cars;
    setCarToRepark(deepDiveCars.find((car) => car.numberplate == numberPlate));
    setReparking(true);
  };

  const handleChangeOfTextualInput = (event) => {
    setChargingStatus(event.target.value);
  };

  const confirmReparking = (event) => {
    var totalPoolCopy = [...listOfPools];
    var deepDiveCars = deepDive.cars;
    deepDiveCars.find(
      (car) => car.numberplate == carToRepark.numberplate
    ).blocked = false;
    const status = deepDiveCars.find(
      (car) => car.numberplate == carToRepark.numberplate
    ).status;
    if (status == 0) {
      deepDiveCars.find(
        (car) => car.numberplate == carToRepark.numberplate
      ).status = 3;
      deepDive.freeChargers = deepDive.freeChargers + 1;
      deepDive.amountLeftToRepark = deepDive.amountLeftToRepark - 1;
      console.log(deepDive);
      setTotalRemaining(totalRemaining - 1);
      setAmountReparked(reparked + 1);
      setNumberOfBlocked(numberOfBlocked - 1);
      setTotalRemaining(totalRemaining - 1);
    }
    if (status == 1) {
      deepDiveCars.find(
        (car) => car.numberplate == carToRepark.numberplate
      ).status = 2;
      deepDive.freeChargers = deepDive.freeChargers - 1;
      deepDive.amountLeftToRepark = deepDive.amountLeftToRepark - 1;
      setTotalRemaining(totalRemaining - 1);
      setAmountReparked(reparked + 1);
      setNumberOfBlocked(numberOfBlocked - 1);
      setTotalRemaining(totalRemaining - 1);
    }
    deepDiveCars.find(
      (car) => car.numberplate == carToRepark.numberplate
    ).chargingStatus = chargingStatus;
    setDeepDive({ ...deepDive, cars: deepDiveCars });
    const numberToSet = deepDive.number - 1;
    var listOfPoolsCopy = totalPoolCopy[numberToSet];
    listOfPoolsCopy = deepDive;
    totalPoolCopy[numberToSet] = listOfPoolsCopy;
    setListOfPools(totalPoolCopy);
    setShowPopUp(true);
    setReparking(false);
    var saferForNumberPoolsRemaining = listOfPools.filter(
      (pool) => pool.amountLeftToRepark == 0
    );
    console.log(saferForNumberPoolsRemaining);
    setPoolsThatNeedToBeReparked(5 - saferForNumberPoolsRemaining.length);
    console.log(listOfPools);
  };

  const backToParkingPool = () => {
    setShowPopUp(false);
  };

  const backToDashboard = () => {
    setShowDetails(false);
    setShowPopUp(false);
    setShowDeepDive(false);
  };

  const goBackToDashboard = () => {
    setShowDeepDive(false);
  };

  const goBackToDeepDive = () => {
    setReparking(false);
  };

  if (!showDetails && !reparking && !showPopUp) {
    return (
      <>
        <Row>
          <Col className="d-flex align-items-center justify-content-center">
            <p className="welcomeMessage">
              You are logged in as <b>{username}</b>
            </p>
          </Col>
          <Col className="text-end">
            <img src={logo} width="75" height="75" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="h-100 backgroundBlue ">
              <Card.Body>
                <Row>
                  <Col className="d-flex align-items-center justify-content-center">
                    <p className="remainingNormal">Remaining</p>
                  </Col>
                </Row>
                <Row>
                  <Col className="d-flex align-items-center justify-content-center">
                    <p className="totalRemaining">
                      <b>{totalRemaining}</b>
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100">
              <Card.Body>
                <Row>
                  <Col className="d-flex align-items-center justify-content-center">
                    <p>Reparked</p>
                  </Col>
                </Row>
                <Row>
                  <Col className="d-flex align-items-center justify-content-center">
                    <p className="bigNumberDisplay">
                      <b>{reparked}</b>
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100">
              <Card.Body>
                <Row>
                  <Col className="d-flex align-items-center justify-content-center">
                    <p>Blocked</p>
                  </Col>
                </Row>
                <Row>
                  <Col className="d-flex align-items-center justify-content-center">
                    <p className="bigNumberDisplay">
                      <b>{numberOfBlocked}</b>
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <p>
              Reparking required: {poolsThatNeedToBeReparked}/5 Parking Pools
            </p>
          </Col>
        </Row>
        {listOfPools.map((carPool) => {
          return (
            <>
              <Row>
                <Col>
                  <Card className="m-2" onClick={() => setShowDetails(carPool)}>
                    <Card.Body>
                      <Row>
                        <Col className="col-8 d-flex align-items-center justify-content-center paragraphOverview">
                          Parking Pool: {carPool.number} ({carPool.amountOfCars}{" "}
                          Cars):
                        </Col>
                        <Col className="col-2 overViewNumber d-flex align-items-center justify-content-center">
                          <p>
                            <b>{carPool.amountLeftToRepark}</b>
                          </p>
                        </Col>
                        <Col className="col-2 d-flex align-items-center justify-content-center">
                          {carPool.amountLeftToRepark == 0 ? (
                            <IoChevronForwardCircleOutline
                              size={70}
                              color="green"
                            />
                          ) : (
                            <IoChevronForwardCircleOutline
                              size={70}
                              color="red"
                            />
                          )}
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </>
          );
        })}
      </>
    );
  }
  if (showDetails && !reparking && !showPopUp) {
    return (
      <>
        <Row>
          <Col
            className="d-flex align-items-center"
            onClick={() => goBackToDashboard()}
          >
            <p>
              <IoIosArrowBack /> Go back
            </p>
          </Col>
          <Col className="text-end">
            <img src={logo} width="75" height="75" />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>Parking Pool {deepDive.number}</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="paginationTop">
              Toal Capacity:
              <span className="textColor"> {deepDive.totalCapactiy}</span>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="paginationTop">
              Cars to Repark:{" "}
              <span className="textColor">{deepDive.amountLeftToRepark}</span>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="paginationTop">
              <b>Free Charging Spots:</b>{" "}
              <span className="textColor">{deepDive.freeChargers}</span>
            </p>
          </Col>
        </Row>
        <Row className="reparkingRow mt-2 mb-2">
          <Col>
            <h2 className="text-center">
              Reparking:<b className="textColor"> Required</b>
            </h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Plugged in Cars to Repark</p>
            {deepDive.cars.map((car) => {
              if (car.status == 0) {
                return (
                  <Row>
                    <Col>
                      <Card
                        className={
                          car.blocked ? "m-1 p-1 blockedCard" : "m-1 p-1"
                        }
                      >
                        <Row>
                          <Col className="col-2 col-sm-1 d-flex align-items-center">
                            {car.type == "Smart" ? (
                              <img
                                src={smart}
                                width="50"
                                height="50"
                                className="imgBackground"
                              />
                            ) : (
                              <img
                                src={nissan}
                                width="50"
                                height="50"
                                className="imgBackground"
                              />
                            )}
                          </Col>
                          <Col className="col-8">
                            <Card.Body>
                              <Card.Text>
                                Vehicle-No: {car.vehicleNumber}{" "}
                                {car.blockedById != userId &&
                                car.blocked == true ? (
                                  <>
                                    <b>Taken</b>
                                  </>
                                ) : (
                                  <></>
                                )}
                                {car.blockedById == userId &&
                                car.blocked == true ? (
                                  <>
                                    <b>You blocked</b>
                                  </>
                                ) : (
                                  <></>
                                )}
                              </Card.Text>
                              <Card.Text>
                                Numberplate: {car.numberplate}
                              </Card.Text>
                              <Card.Text>
                                Distance Covered (Today):{" "}
                                {car.distanceCoveredToday} km
                              </Card.Text>
                            </Card.Body>
                          </Col>
                          <Col className="col-2 d-flex align-items-center">
                            <Dropdown as={ButtonGroup}>
                              <Dropdown.Toggle split id="dropdown-custom-2" />
                              <Dropdown.Menu>
                                {car.blocked == false ? (
                                  <Dropdown.Item
                                    onClick={() => block(car.numberplate)}
                                  >
                                    Block
                                  </Dropdown.Item>
                                ) : (
                                  <></>
                                )}
                                {car.blockedById == userId &&
                                car.blocked == true ? (
                                  <>
                                    <Dropdown.Item
                                      onClick={() => unblock(car.numberplate)}
                                    >
                                      Unblock
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                      onClick={() => repark(car.numberplate)}
                                    >
                                      Repark
                                    </Dropdown.Item>
                                  </>
                                ) : (
                                  <></>
                                )}
                              </Dropdown.Menu>
                            </Dropdown>
                          </Col>
                        </Row>
                      </Card>
                    </Col>
                  </Row>
                );
              }
            })}
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Unplugged Cars to Repark</p>
            {deepDive.cars.map((car) => {
              if (car.status == 1) {
                return (
                  <Row>
                    <Col>
                      <Card
                        className={
                          car.blocked ? "m-1 p-1 blockedCard" : "m-1 p-1"
                        }
                      >
                        <Row>
                          <Col className="col-2 col-sm-1 d-flex align-items-center">
                            {car.type == "Smart" ? (
                              <img
                                src={smart}
                                width="50"
                                height="50"
                                className="imgBackground"
                              />
                            ) : (
                              <img
                                src={nissan}
                                width="50"
                                height="50"
                                className="imgBackground"
                              />
                            )}
                          </Col>
                          <Col className="col-8">
                            <Card.Body>
                              <Card.Text>
                                Vehicle-No: {car.vehicleNumber}{" "}
                                {car.blockedById != userId &&
                                car.blocked == true ? (
                                  <>
                                    <b>Taken</b>
                                  </>
                                ) : (
                                  <></>
                                )}
                                {car.blockedById == userId &&
                                car.blocked == true ? (
                                  <>
                                    <b>You blocked</b>
                                  </>
                                ) : (
                                  <></>
                                )}
                              </Card.Text>
                              <Card.Text>
                                Numberplate: {car.numberplate}
                              </Card.Text>
                              <Card.Text>
                                Distance Covered (Today):{" "}
                                {car.distanceCoveredToday} km
                              </Card.Text>
                            </Card.Body>
                          </Col>
                          <Col className="col-2 d-flex align-items-center">
                            <Dropdown as={ButtonGroup}>
                              <Dropdown.Toggle split id="dropdown-custom-2" />
                              <Dropdown.Menu>
                                {car.blocked == false ? (
                                  <Dropdown.Item
                                    onClick={() => block(car.numberplate)}
                                  >
                                    Block
                                  </Dropdown.Item>
                                ) : (
                                  <></>
                                )}
                                {car.blockedById == userId &&
                                car.blocked == true ? (
                                  <>
                                    <Dropdown.Item
                                      onClick={() => unblock(car.numberplate)}
                                    >
                                      Unblock
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                      onClick={() => repark(car.numberplate)}
                                    >
                                      Repark
                                    </Dropdown.Item>
                                  </>
                                ) : (
                                  <></>
                                )}
                              </Dropdown.Menu>
                            </Dropdown>
                          </Col>
                        </Row>
                      </Card>
                    </Col>
                  </Row>
                );
              }
            })}
          </Col>
        </Row>
        <Row className="reparkingRow mt-2 mb-2">
          <Col>
            <h2 className="text-center">Reparking: Not Required</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Plugged in Cars Parked</p>
            {deepDive.cars.map((car) => {
              if (car.status == 2) {
                return (
                  <Row>
                    <Col>
                      <Card
                        className={
                          car.blocked ? "m-1 p-1 blockedCard" : "m-1 p-1"
                        }
                      >
                        <Row>
                          <Col className="col-2 col-sm-1 d-flex align-items-center">
                            {car.type == "Smart" ? (
                              <img
                                src={smart}
                                width="50"
                                height="50"
                                className="imgBackground"
                              />
                            ) : (
                              <img
                                src={nissan}
                                width="50"
                                height="50"
                                className="imgBackground"
                              />
                            )}
                          </Col>
                          <Col className="col-8">
                            <Card.Body>
                              <Card.Text>
                                Vehicle-No: {car.vehicleNumber}{" "}
                                {car.blockedById != userId &&
                                car.blocked == true ? (
                                  <>
                                    <b>Taken</b>
                                  </>
                                ) : (
                                  <></>
                                )}
                                {car.blockedById == userId &&
                                car.blocked == true ? (
                                  <>
                                    <b>You blocked</b>
                                  </>
                                ) : (
                                  <></>
                                )}
                              </Card.Text>
                              <Card.Text>
                                Numberplate: {car.numberplate}
                              </Card.Text>
                              <Card.Text>
                                Distance Covered (Today):{" "}
                                {car.distanceCoveredToday} km
                              </Card.Text>
                            </Card.Body>
                          </Col>
                          <Col className="col-2 d-flex align-items-center">
                            <Dropdown as={ButtonGroup}>
                              <Dropdown.Toggle split id="dropdown-custom-2" />
                              <Dropdown.Menu>
                                {car.blocked == false ? (
                                  <Dropdown.Item
                                    onClick={() => block(car.numberplate)}
                                  >
                                    Block
                                  </Dropdown.Item>
                                ) : (
                                  <></>
                                )}
                                {car.blockedById == userId &&
                                car.blocked == true ? (
                                  <>
                                    <Dropdown.Item
                                      onClick={() => unblock(car.numberplate)}
                                    >
                                      Unblock
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                      onClick={() => repark(car.numberplate)}
                                    >
                                      Repark
                                    </Dropdown.Item>
                                  </>
                                ) : (
                                  <></>
                                )}
                              </Dropdown.Menu>
                            </Dropdown>
                          </Col>
                        </Row>
                      </Card>
                    </Col>
                  </Row>
                );
              }
            })}
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Unplugged Cars Parked</p>
            {deepDive.cars.map((car) => {
              if (car.status == 3) {
                return (
                  <Row>
                    <Col>
                      <Card
                        className={
                          car.blocked ? "m-1 p-1 blockedCard" : "m-1 p-1"
                        }
                      >
                        <Row>
                          <Col className="col-2 col-sm-1 d-flex align-items-center">
                            {car.type == "Smart" ? (
                              <img
                                src={smart}
                                width="50"
                                height="50"
                                className="imgBackground"
                              />
                            ) : (
                              <img
                                src={nissan}
                                width="50"
                                height="50"
                                className="imgBackground"
                              />
                            )}
                          </Col>
                          <Col className="col-8">
                            <Card.Body>
                              <Card.Text>
                                Vehicle-No: {car.vehicleNumber}{" "}
                                {car.blockedById != userId &&
                                car.blocked == true ? (
                                  <>
                                    <b>Taken</b>
                                  </>
                                ) : (
                                  <></>
                                )}
                                {car.blockedById == userId &&
                                car.blocked == true ? (
                                  <>
                                    <b>You blocked</b>
                                  </>
                                ) : (
                                  <></>
                                )}
                              </Card.Text>
                              <Card.Text>
                                Numberplate: {car.numberplate}
                              </Card.Text>
                              <Card.Text>
                                Distance Covered (Today):{" "}
                                {car.distanceCoveredToday} km
                              </Card.Text>
                            </Card.Body>
                          </Col>
                          <Col className="col-2 d-flex align-items-center">
                            <Dropdown as={ButtonGroup}>
                              <Dropdown.Toggle split id="dropdown-custom-2" />
                              <Dropdown.Menu>
                                {car.blocked == false ? (
                                  <Dropdown.Item
                                    onClick={() => block(car.numberplate)}
                                  >
                                    Block
                                  </Dropdown.Item>
                                ) : (
                                  <></>
                                )}
                                {car.blockedById == userId &&
                                car.blocked == true ? (
                                  <>
                                    <Dropdown.Item
                                      onClick={() => unblock(car.numberplate)}
                                    >
                                      Unblock
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                      onClick={() => repark(car.numberplate)}
                                    >
                                      Repark
                                    </Dropdown.Item>
                                  </>
                                ) : (
                                  <></>
                                )}
                              </Dropdown.Menu>
                            </Dropdown>
                          </Col>
                        </Row>
                      </Card>
                    </Col>
                  </Row>
                );
              }
            })}
          </Col>
        </Row>
      </>
    );
  }
  if (reparking && !showPopUp) {
    return (
      <>
        <Row>
          <Col
            className="d-flex align-items-center"
            onClick={() => goBackToDeepDive()}
          >
            <p>
              <IoIosArrowBack /> Go back
            </p>
          </Col>
          <Col className="text-end">
            <img src={logo} width="75" height="75" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col>
                <h1>Reparking</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Parking pool: {deepDive.number}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Vehicle: {carToRepark.vehicleNumber}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Type: {carToRepark.type}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Number plate: {carToRepark.numberplate}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Battery status:</p>
              </Col>
            </Row>
            <Form>
              <Row>
                <Col>
                  <InputGroup className="mb-3">
                    <Form.Control
                      value={chargingStatus}
                      id="chargingStatus"
                      name="chargingStatus"
                      placeholder="Enter Battery status"
                      aria-label="Enter Battery status"
                      aria-describedby="basic-addon2"
                      onChange={handleChangeOfTextualInput}
                    />
                    <InputGroup.Text id="basic-addon2">%</InputGroup.Text>
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col className="d-flex m-5 justify-content-center">
                  <Button onClick={confirmReparking}>Confirm Reparking</Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </>
    );
  }
  if (showPopUp) {
    return (
      <>
        <Row>
          <Col></Col>
          <Col className="text-end">
            <img src={logo} width="75" height="75" />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="col-1"></Col>
          <Col>
            <Row>
              <Col>
                <Card className="pt-5 pb-5 d-flex justify-content-center align-items-center confirmationClass">
                  <Card.Title>
                    <h2>Confirmed!</h2>
                  </Card.Title>
                  <Card.Text>
                    <p>Battery Status: {chargingStatus}%</p>
                  </Card.Text>
                </Card>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col className="d-flex justify-content-center align-items-center">
                <center>
                  <p
                    className="goBack mt-3"
                    onClick={() => backToParkingPool()}
                  >
                    <b>Click here to get back to the Parking Pool</b>
                  </p>
                </center>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center align-items-center">
                <center>
                  <p className="goBack mt-5" onClick={() => backToDashboard()}>
                    <b>Click here to get back to the Dashboard</b>
                  </p>
                </center>
              </Col>
            </Row>
          </Col>

          <Col className="col-1"></Col>
        </Row>
      </>
    );
  }
  if (true) {
    return <></>;
  }
}

export default Home;
