import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Input,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import { FaLocationArrow, FaTimes } from "react-icons/fa";
import "antd/dist/antd.css";
import { FaCarSide } from "react-icons/fa";
import { FaShuttleVan } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import ReactDOM from "react-dom";
import moment from "moment";
import { DatePicker, Space } from "antd";
import React from "react";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { Card, Col, Row } from "antd";
import { useRef, useState, useEffect } from "react";

const center = { lat: -35.282001, lng: 149.128998 };

function App() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCKjXjQewYnp43mXC5d22qhHU8ttgSCpDw",
    libraries: ["places"],
  });

  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState("");
  const [pickNow, setpickNow] = useState(false);
  const [Reserve, setReserve] = useState(false);
  const originRef = useRef();
  const destiantionRef = useRef();

  const picjUpNow = () => {};

  if (!isLoaded) {
    return <SkeletonText />;
  }

  async function calculateRoute() {
    if (originRef.current.value === "" || destiantionRef.current.value === "") {
      return;
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destiantionRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance(0);
    setDuration("");
    originRef.current.value = "";
    destiantionRef.current.value = "";
  }
  function disabledDate(current) {
    return current && current < moment().endOf("day");
  }
  function disabledDateTime(current) {
    return current && current < moment().hours();
  }
  console.log("duration", duration);
  console.log("distance", distance);
  const number = parseInt(distance);
  return (
    <div>
      <Flex
        position="relative"
        flexDirection="column"
        alignItems="center"
        h="80vh"
        w="80vw"
      >
        <Box position="absolute" left={0} top={0} h="100%" w="100%">
          {/* Google Map Box */}
          <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{ width: "100%", height: "100%" }}
            options={{
              zoomControl: false,
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: false,
            }}
            onLoad={(map) => setMap(map)}
          >
            <Marker position={center} />
            {directionsResponse && (
              <DirectionsRenderer directions={directionsResponse} />
            )}
          </GoogleMap>
        </Box>
        <Box
          p={4}
          borderRadius="lg"
          m={4}
          bgColor="white"
          shadow="base"
          minW="container.md"
          zIndex="1"
        >
          <HStack spacing={2} justifyContent="space-between">
            <Box flexGrow={1}>
              <Autocomplete>
                <Input
                  type="text"
                  placeholder="pick up location"
                  ref={originRef}
                />
              </Autocomplete>
            </Box>
            <Box flexGrow={1}>
              <Autocomplete>
                <Input
                  type="text"
                  placeholder="drop up location"
                  ref={destiantionRef}
                />
              </Autocomplete>
            </Box>

            <ButtonGroup>
              <Button
                colorScheme="yellow"
                type="submit"
                onClick={calculateRoute}
              >
                Next
              </Button>
              <IconButton
                aria-label="center back"
                icon={<FaTimes />}
                onClick={clearRoute}
              />
            </ButtonGroup>
          </HStack>
          <HStack spacing={4} mt={4} justifyContent="space-between">
            <Text>Distance: {distance} </Text>
            <Text>Duration: {duration} </Text>
            <IconButton
              aria-label="center back"
              icon={<FaLocationArrow />}
              isRound
              onClick={() => {
                map.panTo(center);
                map.setZoom(12);
              }}
            />
          </HStack>
        </Box>
      </Flex>
      <div>
        {duration ? (
          <div className="flex justify-center gap-8 py-8">
            <button
              onClick={() => {
                setpickNow(true);
                setReserve(false);
              }}
              className="btn btn-outline btn-warning"
            >
              Pick up right now
            </button>
            <button
              onClick={() => {
                setpickNow(false);
                setReserve(true);
              }}
              className="btn btn-outline btn-warning"
            >
              Reserve Pick up
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div>
        {pickNow ? (
          <div className="flex justify-center">
            <div className="site-card-wrapper">
              <Row gutter={16}>
                <Col span={8}>
                  <Card
                    title={<FaCarSide className="text-6xl" />}
                    bordered={false}
                  >
                    Car:${(number + 10) * 0.7}
                  </Card>
                </Col>
                <Col span={8}>
                  <Card
                    title={<FaShuttleVan className="text-6xl" />}
                    bordered={false}
                  >
                    Van:${(number + 20) * 1}
                  </Card>
                </Col>
                <Col span={8}>
                  <Card
                    title={<FaTruck className="text-6xl" />}
                    bordered={false}
                  >
                    Truck:${(number + 40) * 1.2}
                  </Card>
                </Col>
              </Row>
            </div>
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                which type of car do you want
              </option>
              <option>Normal Car</option>
              <option>Van</option>
              <option>Truck</option>
            </select>
            <button class="btn btn-success">Submit</button>
          </div>
        ) : (
          <></>
        )}{" "}
      </div>
      <div>
        {Reserve ? (
          <div className="flex justify-center">
            <Space direction="vertical" size={12}>
              <DatePicker
                format="YYYY-MM-DD HH:mm:ss"
                disabledDate={disabledDate}
                disabledTime={disabledDateTime}
                showTime={{ defaultValue: moment("00:00:00", "HH:mm:ss") }}
              />
            </Space>
            <div className="site-card-wrapper">
              <Row gutter={16}>
                <Col span={8}>
                  <Card
                    title={<FaCarSide className="text-6xl" />}
                    bordered={false}
                  >
                    Car:${(number + 10) * 0.7}
                  </Card>
                </Col>
                <Col span={8}>
                  <Card
                    title={<FaShuttleVan className="text-6xl" />}
                    bordered={false}
                  >
                    Van:${(number + 20) * 1}
                  </Card>
                </Col>
                <Col span={8}>
                  <Card
                    title={<FaTruck className="text-6xl" />}
                    bordered={false}
                  >
                    Truck:${(number + 40) * 1.2}
                  </Card>
                </Col>
              </Row>
            </div>
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                which type of car do you want
              </option>
              <option>Normal Car</option>
              <option>Van</option>
              <option>Truck</option>
            </select>
            <div className=" flex jusitfy-center">
              <button class="btn btn-success">Submit</button>
            </div>
          </div>
        ) : (
          <></>
        )}
        {"  "}
      </div>
    </div>
  );
}

export default App;
