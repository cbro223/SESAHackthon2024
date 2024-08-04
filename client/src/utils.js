export const fetchOxygenData = async () => {
    try {
      const response = await fetch('http://localhost:5000/oxygen');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  export const updateOxygenData = async (updateBy) => {
    try {
      const response = await fetch(`http://localhost:5000/oxygen/${updateBy}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };