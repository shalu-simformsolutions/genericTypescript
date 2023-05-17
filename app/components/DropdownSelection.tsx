// Generic Component Example
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles/DropdownSelectionStyles';

interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps<T> {
  options: DropdownOption[];
  selectedValues: T;
  onSelect: (values: T) => void;
}

const Dropdown = <T,>({
  options,
  selectedValues,
  onSelect,
}: DropdownProps<T>): JSX.Element => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const handleOptionSelect = (option: T) => {
    if (Array.isArray(selectedValues)) {
      const updatedValues = selectedValues?.includes(option)
        ? selectedValues?.filter((selectedValue) => selectedValue !== option)
        : [...selectedValues, option];
      onSelect(updatedValues as T);
    } else {
      const updatedValue =
        option !== null && selectedValues === option ? null : option;
      onSelect(updatedValue as T);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.dropdownButton}
        onPress={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <Text>{'Select options'}</Text>
      </TouchableOpacity>
      {isDropdownOpen && (
        <View style={styles.optionsContainer}>
          {options?.map((option) => (
            <TouchableOpacity
              key={option.value}
              style={[
                styles.optionButton,
                Array.isArray(selectedValues) &&
                selectedValues?.includes(option)
                  ? styles.selectedOptionButton
                  : selectedValues === option
                  ? styles.selectedOptionButton
                  : null,
              ]}
              onPress={() => handleOptionSelect(option)}
            >
              <Text>{option?.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

// Usage example
// Define options for the dropdown

const options: DropdownOption[] = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

// Create a component using the Dropdown
const DropdownSelection: React.FC = () => {
  const [selectedSingleValue, setSelectedSingleValue] =
    useState<DropdownOption | null>(null);
  const [selectedMultipleValues, setSelectedMultipleValues] = useState<
    DropdownOption[] | []
  >([]);

  const handleSingleSelect = (selectedValue: DropdownOption | null) => {
    setSelectedSingleValue(selectedValue);
  };

  const handleMultipleSelect = (selectedValues: DropdownOption[] | []) => {
    setSelectedMultipleValues(selectedValues);
  };

  return (
    <View style={styles.appContainer}>
      <Dropdown<DropdownOption | null>
        options={options}
        selectedValues={selectedSingleValue}
        onSelect={handleSingleSelect}
      />
      <Dropdown<DropdownOption[]>
        options={options}
        selectedValues={selectedMultipleValues}
        onSelect={handleMultipleSelect}
      />
    </View>
  );
};

export default DropdownSelection;
