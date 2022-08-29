# React Hook Form

Here an example if you want to plug `MuiColorInput` to your form using [React Hook Form](https://react-hook-form.com/).

```tsx
import React from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
import { MuiColorInput, matchIsValidColor } from "mui-color-input";
import { Controller, useForm } from "react-hook-form";

const App = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      color: "#ffffff"
    }
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="color"
        control={control}
        rules={{ validate: matchIsValidColor }}
        render={({ field, fieldState }) => (
          <MuiColorInput
            {...field}
            format="hex"
            helperText={fieldState.invalid ? "Color is invalid" : ""}
            error={fieldState.invalid}
          />
        )}
      />
     <div>
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Submit
        </Button>
      </div>
    </form>
  )
}
```

[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-hook-form-with-mui-color-input-94iiv1?fontsize=14&hidenavigation=1&theme=dark)