import React from "react";
import { ProSidebar, Menu, MenuItem, SidebarFooter } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import {
  AiOutlineArrowUp,
  AiOutlineArrowDown,
  AiOutlineStar,
} from "react-icons/ai";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  sortByPrice,
  sortByStar,
  clearAll,
  sortByDelivery,
  sortByStock,
} from "../store/filterSlice";
const Sidebar = () => {
  const { byStock, byFastDelivery, byRating } = useSelector(
    (state) => state.filter
  );
  const dispatch = useDispatch();
  return (
    <ProSidebar className="sidebar m-4">
      <h3 className="text-center m-2">Filter Products</h3>
      <Menu iconShape="square">
        <MenuItem
          onClick={() => dispatch(sortByPrice("ascending"))}
          icon={<AiOutlineArrowUp />}
        >
          Ascending
        </MenuItem>
        <MenuItem
          onClick={() => dispatch(sortByPrice("descending"))}
          icon={<AiOutlineArrowDown />}
        >
          Descending
        </MenuItem>
        <MenuItem>
          <Form.Label>
            Rating <AiOutlineStar /> :{" "}
          </Form.Label>
          <Form.Select
          value={byRating}
            onChange={(e) => dispatch(sortByStar(e.target.value))}
            defaultValue="Select ..."
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Select>
        </MenuItem>
        <MenuItem>
          <Form.Group id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              onChange={() => {
                dispatch(sortByStock());
              }}
              label="In Stock Only"
              checked = {byStock}
            />
          </Form.Group>
        </MenuItem>
        <MenuItem>
          <Form.Group id="formGridCheckbox">
            <Form.Check
              onChange={() => dispatch(sortByDelivery())}
              type="checkbox"
              label="Express Delivery Only"
              checked={byFastDelivery}
            />
          </Form.Group>
        </MenuItem>
        <MenuItem>
          <Button
            onClick={() => dispatch(clearAll())}
            variant="danger"
            className="mb-3"
          >
            Clear All
          </Button>
        </MenuItem>
      </Menu>
      <SidebarFooter className="text-center m-2">
        Made by{" "}
        <a
          href="https://github.com/Vivek-Vishwakarma"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vivek Vishwakarma
        </a>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Sidebar;
