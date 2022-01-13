import {
  CardsContainer,
  Card,
  UsageText,
  Price,
  RandomText,
  LearnMoreButton,
} from "../styles/Cards";

import { usePlanContext } from "../context/PlanContext";

const Card1 = (props) => {
  const { plan, setPlan } = usePlanContext();
  return (
    <CardsContainer>
      <Card>
        <UsageText>Basic</UsageText>

        <Price>{plan === "monthly" ? "$10.00" : "$20.00"}</Price>

        <RandomText>2 slots for vehicles</RandomText>
        <RandomText>Blue walls and floors</RandomText>
        <RandomText>Only cars</RandomText>

        <LearnMoreButton>Learn more</LearnMoreButton>
      </Card>

      <Card>
        <UsageText>Professional</UsageText>

        <Price>{plan === "monthly" ? "$20.00" : "$40.00"}</Price>

        <RandomText>4 slots for vehicles</RandomText>
        <RandomText>Yellow walls and floors</RandomText>
        <RandomText>Cars and bikes</RandomText>
        <LearnMoreButton>Learn more</LearnMoreButton>
      </Card>

      <Card>
        <UsageText>Master</UsageText>

        <Price>{plan === "monthly" ? "$40.00" : "$80.00"}</Price>

        <RandomText>8 slots for vehicles</RandomText>
        <RandomText>Red walls and floors</RandomText>
        <RandomText>Cars, bikes and helicopters</RandomText>

        <LearnMoreButton>Learn more</LearnMoreButton>
      </Card>
    </CardsContainer>
  );
};

export default Card1;
