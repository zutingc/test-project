import styles from './Styles/MyComponent.module.css';

const InlineExample = () => {
    const myStyle = {
      color: 'blue',
      fontSize: '16px',
    };
  
    return <div style={myStyle}>Hello, React!</div>;
};

const ImportedExample = () => {
    // Note the camelcase of className
    return <div className={styles.myComponent}>Hello, React!</div>; 
};

function StylesDemo() {
    return(
        <div>
            <InlineExample />
            <ImportedExample />
        </div>
    )
}

export default StylesDemo;