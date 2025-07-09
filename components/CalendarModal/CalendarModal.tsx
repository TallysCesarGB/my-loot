import React, { useState } from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import {
  CalendarModalButton,
  CalendarModalContainer,
  CalendarModalText,
  ModalContent,
} from "./CalendarModalStyle";
import { Calendar, LocaleConfig } from "react-native-calendars";
import ptBR from "./LocaleCalendar";

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";

interface CalendarModalProps {
  setModalVisible: (visible: boolean) => void;
  handleFilterDate: (date: Date) => void;
}

export default function CalendarModal({
  setModalVisible,
  handleFilterDate,
}: CalendarModalProps) {
  const [dateNow, setDateNow] = useState(new Date());
  const [dateSelected, setDateSelected] = useState({});

  function handleOnDayPress(day: { dateString: string }) {
    // console.log("Selected day:", day.dateString);
    setDateNow(new Date(day.dateString));
    setDateSelected({
      [day.dateString]: {
        selected: true,
        selectedColor: "#3b3dbf",
        textColor: "#ffffff",
      },
    });
  }

  function filterDaySelected() {
    handleFilterDate(dateNow);
    setModalVisible(false);
  }

  return (
    <CalendarModalContainer>
      <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
        <View style={{ flex: 1 }} />
      </TouchableWithoutFeedback>
      <ModalContent>
        <Calendar
          onDayPress={handleOnDayPress}
          markedDates={dateSelected}
          enableSwipeMonths={true}
          theme={{
            todayTextColor: "#ff0000",
            selectedDayBackgroundColor: "#3b3dbf",
            selectedDayTextColor: "#ffffff",
          }}
          style={{ width: "100%", marginBottom: 40 }}
        />
        <CalendarModalButton onPress={filterDaySelected}>
          <CalendarModalText>Escolha uma data</CalendarModalText>
        </CalendarModalButton>
      </ModalContent>
    </CalendarModalContainer>
  );
}
