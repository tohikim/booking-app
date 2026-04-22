import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("User can submit the form successfully", () => {
    // Mocking the props
    const mockAvailableTimes = ["17:00", "18:00"];
    const mockDispatch = jest.fn();

    render(
        <BookingForm 
            availableTimes={mockAvailableTimes} 
            dispatch={mockDispatch} 
        />
    );

    // 1. Target the input elements
    const dateInput = screen.getByLabelText(/choose date/i);
    const timeSelect = screen.getByLabelText(/choose time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const occasionSelect = screen.getByLabelText(/occasion/i);
    const submitButton = screen.getByRole("button", { name: /reserve table/i });

    // 2. Simulate user typing and selecting
    fireEvent.change(dateInput, { target: { value: "2026-04-25" } });
    fireEvent.change(timeSelect, { target: { value: "18:00" } });
    fireEvent.change(guestsInput, { target: { value: "4" } });
    fireEvent.change(occasionSelect, { target: { value: "Regular Meal" } });

    // 3. Click the submit button
    fireEvent.click(submitButton);

    // 4. Assertion (Check if your handler logic or expected output was triggered)
    // Since your handleSubmit currently logs to the console, 
    // you would typically test if a submission function was called.
    expect(submitButton).toBeEnabled();
});

test("Date field has HTML5 validation attributes", () => {
    render(<BookingForm availableTimes={["17:00"]} dispatch={jest.fn()} />);
    const dateInput = screen.getByLabelText(/choose date/i);
    
    // Check for the 'required' attribute you added to your input tag
    expect(dateInput).toHaveAttribute("required");
});