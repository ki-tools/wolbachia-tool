import Box from '@mui/material/Box';
import ValueInput from './ValueInput';
import ButtonSelect from './ButtonSelect';
import RadioSel from './RadioSelect';
import PercentSlider from './PercentSlider';
import SectionHeader from './SectionHeader';

const SidebarControls = ({ inputs, setInputs }) => {
  const handleChange = (val, nm) => {
    const newInputs = { ...inputs };
    newInputs[nm] = val;
    setInputs(newInputs);
  };

  // for slider
  const handleChange2 = (val, nm) => {
    const newInputs = { ...inputs };
    newInputs[nm] = val / 100;
    setInputs(newInputs);
  };

  return (
    <Box padding={2}>
      <ButtonSelect
        inputs={inputs}
        nm="TARPLN"
        handleChange={handleChange}
        orientation="vertical"
      />
      {inputs.TARPLN === 'POPDEN' && (
        <>
          <RadioSel inputs={inputs} nm="POPDEN" handleChange={handleChange} />
        </>
      )}
      {inputs.TARPLN === 'REDTAR' && (
        <>
          <RadioSel inputs={inputs} nm="REDTAR" handleChange={handleChange} />
        </>
      )}

      <PercentSlider inputs={inputs} nm="COV" handleChange={handleChange2} />
      <PercentSlider inputs={inputs} nm="EFF" handleChange={handleChange2} />

      <ButtonSelect inputs={inputs} nm="PHSACT" handleChange={handleChange} />
      {inputs.PHSACT === 'PHASE' && (
        <>
          <SectionHeader title="Primary Costs" />
          <ValueInput inputs={inputs} nm="PLAN" handleChange={handleChange} />
          <ValueInput inputs={inputs} nm="PREP" handleChange={handleChange} />
          <ValueInput inputs={inputs} nm="PROD" handleChange={handleChange} />
          <ValueInput inputs={inputs} nm="DIST" handleChange={handleChange} />
          <ValueInput inputs={inputs} nm="REL" handleChange={handleChange} />
          <ValueInput inputs={inputs} nm="MONIT" handleChange={handleChange} />
        </>
      )}
      {inputs.PHSACT === 'ACTIVITY' && (
        <>
          <SectionHeader title="Planning Costs" />
          <ValueInput inputs={inputs} nm="WRKPLN" handleChange={handleChange} />
          <ValueInput inputs={inputs} nm="DETREL" handleChange={handleChange} />
          <SectionHeader title="Preparation Costs" />
          <ValueInput inputs={inputs} nm="COMMUN" handleChange={handleChange} />
          <SectionHeader title="Production Costs" />
          <ValueInput inputs={inputs} nm="FACSET" handleChange={handleChange} />
          <ValueInput inputs={inputs} nm="LINCRE" handleChange={handleChange} />
          <ValueInput inputs={inputs} nm="MOSPRD" handleChange={handleChange} />
          <ValueInput inputs={inputs} nm="QM" handleChange={handleChange} />
          <SectionHeader title="Distribution Costs" />
          <ValueInput inputs={inputs} nm="DELEGG" handleChange={handleChange} />
          <SectionHeader title="Release Costs" />
          <ValueInput inputs={inputs} nm="EGGDEP" handleChange={handleChange} />
          <ValueInput inputs={inputs} nm="QA" handleChange={handleChange} />
          <SectionHeader title="Monitoring Costs" />
          <ValueInput inputs={inputs} nm="ADMAN" handleChange={handleChange} />
          <ValueInput inputs={inputs} nm="COMSEN" handleChange={handleChange} />
          <ValueInput inputs={inputs} nm="WOLMON" handleChange={handleChange} />
        </>
      )}
      <RadioSel inputs={inputs} nm="TIMFRM" handleChange={handleChange} />
    </Box>
  );
};

export default SidebarControls;
