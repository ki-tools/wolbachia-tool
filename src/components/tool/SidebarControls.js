import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Divider from '@mui/material/Divider';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ValInput from './ValInput';
import ButtonSelect from './ButtonSelect';
import RadioSel from './RadioSelect';
import PercentSlider from './PercentSlider';
import SectionHeader from './SectionHeader';
import BudgetConstraint from './BudgetConstraint';

const SidebarControls = ({ inputs, setInputs }) => {
  const handleChng = (val, nm) => {
    const newInputs = { ...inputs };
    newInputs[nm] = val;
    setInputs(newInputs);
  };

  // for slider
  const handleChng2 = (val, nm) => {
    const newInputs = { ...inputs };
    newInputs[nm] = val / 100;
    setInputs(newInputs);
  };

  return (
    <Box padding={2}>
      <ButtonSelect
        inputs={inputs}
        nm="TARPLN"
        handleChange={handleChng}
        orientation="vertical"
      />
      {inputs.TARPLN === 'POPDEN' && (
        <>
          <RadioSel inputs={inputs} nm="POPDEN" handleChange={handleChng} />
        </>
      )}
      {inputs.TARPLN === 'REDTAR' && (
        <>
          <RadioSel inputs={inputs} nm="REDTAR" handleChange={handleChng} />
        </>
      )}
      <Divider sx={{ marginLeft: -2, marginRight: -2, marginBottom: 1 }} />
      <PercentSlider inputs={inputs} nm="COV" handleChange={handleChng2} />
      <PercentSlider inputs={inputs} nm="EFF" handleChange={handleChng2} />
      <Divider sx={{ marginLeft: -2, marginRight: -2, marginBottom: 1.5 }} />
      <ButtonSelect
        inputs={inputs}
        nm="PHSACT"
        handleChange={handleChng}
        pb={0}
      />
      <Accordion sx={accordionSx}>
        <AccordionSummary
          sx={accordionSummarySx}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <SectionHeader
            title={`${
              inputs.PHSACT === 'PHASE' ? 'Phase' : 'Activity'
            } Costs Detail (${inputs.PHSACT === 'PHASE' ? 6 : 13} inputs)`}
            style={{ height: 10 }}
          />
        </AccordionSummary>
        <AccordionDetails sx={{ padding: 0 }}>
          {inputs.PHSACT === 'PHASE' && (
            <>
              {/* <SectionHeader title="Primary Costs" /> */}
              <ValInput inputs={inputs} nm="PLAN" handleChange={handleChng} />
              <ValInput inputs={inputs} nm="PREP" handleChange={handleChng} />
              <ValInput inputs={inputs} nm="PROD" handleChange={handleChng} />
              <ValInput inputs={inputs} nm="DIST" handleChange={handleChng} />
              <ValInput inputs={inputs} nm="REL" handleChange={handleChng} />
              <ValInput inputs={inputs} nm="MONIT" handleChange={handleChng} />
            </>
          )}
          {inputs.PHSACT === 'ACTIVITY' && (
            <>
              <SectionHeader title="Planning Costs" />
              <ValInput inputs={inputs} nm="WRKPLN" handleChange={handleChng} />
              <ValInput inputs={inputs} nm="DETREL" handleChange={handleChng} />
              <SectionHeader title="Preparation Costs" />
              <ValInput inputs={inputs} nm="COMMUN" handleChange={handleChng} />
              <SectionHeader title="Production Costs" />
              <ValInput inputs={inputs} nm="FACSET" handleChange={handleChng} />
              <ValInput inputs={inputs} nm="LINCRE" handleChange={handleChng} />
              <ValInput inputs={inputs} nm="MOSPRD" handleChange={handleChng} />
              <ValInput inputs={inputs} nm="QM" handleChange={handleChng} />
              <SectionHeader title="Distribution Costs" />
              <ValInput inputs={inputs} nm="DELEGG" handleChange={handleChng} />
              <SectionHeader title="Release Costs" />
              <ValInput inputs={inputs} nm="EGGDEP" handleChange={handleChng} />
              <ValInput inputs={inputs} nm="QA" handleChange={handleChng} />
              <SectionHeader title="Monitoring Costs" />
              <ValInput inputs={inputs} nm="ADMAN" handleChange={handleChng} />
              <ValInput inputs={inputs} nm="COMSEN" handleChange={handleChng} />
              <ValInput inputs={inputs} nm="WOLMON" handleChange={handleChng} />
            </>
          )}
        </AccordionDetails>
      </Accordion>
      <Divider sx={{ marginLeft: -2, marginRight: -2, marginBottom: 1 }} />
      <BudgetConstraint
        inputs={inputs}
        setInputs={setInputs}
        handleChange={handleChng}
      />
      <Divider sx={{ marginLeft: -2, marginRight: -2, marginBottom: 1 }} />
      <RadioSel inputs={inputs} nm="TIMFRM" handleChange={handleChng} />
    </Box>
  );
};

export default SidebarControls;

const accordionSx = {
  height: 'unset !important',
  top: '0px !important',
  boxShadow: 'none',
  margin: '0px !important',
  '&:before': {
    transition: 'none',
    height: 0,
  },
};

const accordionSummarySx = {
  height: '48px !important',
  minHeight: '48px !important',
  padding: 0,
};
